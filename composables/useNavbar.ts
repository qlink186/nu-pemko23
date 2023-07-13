export const useNavbar = () => {
  const config = useRuntimeConfig()
  const { data: menu } = useAsyncData(
    'menu', 
    () => $fetch(`menu`, 
      {
        method: 'GET',
        baseURL: config.public['apiUrl']
      }
    )
  )
  return { menu }
}