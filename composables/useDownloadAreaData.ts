export const useDownloadAreaData = () => {
  const config = useRuntimeConfig()
  let size:Ref<number> = ref(10)
  const sizes = [ 25, 50, 100]
  const cariAll:Ref<string>  = ref('')
  const cariKat:Ref<string> = ref('')
  const cariJenisFile:Ref<string> = ref('')
  const cariOpd:Ref<string> = ref('')
  const cariPeruntukan:Ref<string> = ref('')
  const currentPage:Ref<number> = ref(1)
  
  // Download Area Data
  const { 
    pending, 
    error, 
    refresh,
    data: dtdown 
  } = useAsyncData(
    'dtdown',
    () => $fetch(`download-area`,
      {
        method: 'GET',
        baseURL: config.public['apiUrl'],
        params: {
          currentPage: currentPage.value,
          size: size.value,
          cariAll: cariAll.value,
          cariKat: cariKat.value,
          cariJenisFile: cariJenisFile.value,
          cariOpd: cariOpd.value,
          cariPeruntukan: cariPeruntukan.value,
        }
      }
    ), {
      watch: [
        size,
        currentPage,
        cariAll,
        cariKat,
        cariJenisFile,
        cariOpd,
        cariPeruntukan,
      ]
    }
  );
  return { pending, error, refresh, dtdown, size, sizes, cariAll, cariKat, cariJenisFile, cariOpd, cariPeruntukan, currentPage}
}