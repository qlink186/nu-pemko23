export const useNavbar = () => {
  const config = useRuntimeConfig()
  const { data: menu } = useAsyncData(
    'menu', 
    () => $fetch(config.public['apiUrl']+`menu`)
  )
  return { menu }
}