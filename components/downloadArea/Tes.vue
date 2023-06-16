<template>
  <div>
    <ul>
      <li v-for="dwn in dataDownloadArea" 
        :key="dwn.id" 
        v-text="dwn.nama_file"></li>
    </ul>

    <div v-if="pending">Loading...</div>
    <button @click="loadMore()">Lainnya</button>
  </div>
</template>

<script setup>
const dataDownloadArea = ref([]);
const pending = ref(false);

const config = useRuntimeConfig()

const size = ref()
const cariAll = ref('')
const cariKat = ref('')
const cariJenisFile = ref('')
const cariOpd = ref('')
const cariPeruntukan = ref('')
const currentPage = ref(0)
const totalPages = ref(1);

onMounted(() => {
  loadCompanies();
})

const loadMore = () => {
  if( currentPage.value + 1 <= totalPages.value ){
    currentPage.value = currentPage.value + 1;
    
    loadCompanies();
  }
}

const loadCompanies = () => {
  pending.value = true;

  $fetch(`download-area?page=${currentPage.value}&size=${size.value}&cariAll=${cariAll.value}`, {
    method: 'GET',
    baseURL: config.public['apiUrl'],
    params: {
      page: currentPage.value,
      size: size.value,
      cariAll: cariAll.value,
      cariKat: cariKat.value,
      cariJenisFile: cariJenisFile.value,
      cariOpd: cariOpd.value,
      cariPeruntukan: cariPeruntukan.value
    }
  }).then( function( dtdown ){
    tampilLebihBanyakData( dtdown.downloadarea );
    pending.value = false;
    totalPages.value = dtdown.totalPages;
  });
}

const tampilLebihBanyakData = ( newCompanies ) => {
  newCompanies.forEach( ( dtdown ) => {
    dataDownloadArea.value.push( dtdown );
  });
}
</script>