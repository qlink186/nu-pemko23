export const useNavbar = () => {
  const config = useRuntimeConfig()
  const { pending, data: menu } = useAsyncData('menu', () => $fetch(config.public['apiUrl']+`menu`))
  return { menu }
}