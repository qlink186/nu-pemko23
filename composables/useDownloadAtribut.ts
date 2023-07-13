export const useDownloadAtribut = () => {
  const config = useRuntimeConfig()
  
  // Jenis Informasi
  const { data: jnsinf } = useAsyncData(
    'jnsinf',
    () => $fetch(`download-area/jenisfile`,
      {
        method: 'GET',
        baseURL: config.public['apiUrl']
      }
    )
  );

  // OPD
  const { data: daopd } = useAsyncData(
    'daopd',
    () => $fetch(`download-area/opd`,
      {
        method: 'GET',
        baseURL: config.public['apiUrl']
      }
    )
  );

  // KATEGORI
  const { data: kategori } = useAsyncData(
    'kategori',
    () => $fetch(`download-area/kat`,
      {
        method: 'GET',
        baseURL: config.public['apiUrl']
      }
    )
  );

  return { jnsinf, daopd, kategori }
}