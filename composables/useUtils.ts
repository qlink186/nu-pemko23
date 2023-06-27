import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

export const useUtils = () => {
  // tracks mouse position
  const { x, y } = useMouse()

  // is user prefers dark theme
  const isDark = usePreferredDark()

  // persist state in localStorage
  const store = useLocalStorage(
    'my-storage',
    {
      name: 'Jeruk',
      color: 'red',
    },
  )

  return { x, y, isDark, store }
}