import { useLocalStorage, useMouse, usePreferredDark, useOnline  } from '@vueuse/core'

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

  const online = useOnline()

  return { x, y, isDark, store, online }
}