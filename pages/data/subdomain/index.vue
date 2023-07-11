<script setup lang="ts">

  //meta title
  useHead({
    title: 'Data Subdomain | Pemerintah Kota Tanjungpinang',
  });

  const config = useRuntimeConfig()

  let size = ref(100)
  const cariAll = ref('')
  const cariKat = ref('')
  const cariJenisFile = ref('')
  const cariOpd = ref('')
  const cariPeruntukan = ref('')
  const currentPage = ref(0)

  const { 
    pending, 
    error, 
    refresh, 
    data: dtdown 
  } = await useAsyncData(
    'dtdown', () => 
    $fetch(`download-area?page=${currentPage.value}&size=${size.value}&cariAll=${cariAll.value}&cariKat=${cariKat.value}&cariJenisFile=${cariJenisFile.value}&cariOpd=${cariOpd.value}&cariPeruntukan${cariPeruntukan.value}`,{
      key: `userlist-${currentPage.value}`,
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
    }), {
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


function resetFilter() {
  cariAll.value = '';
}
</script>



<template>
  <h1>Data Subdomain</h1>
  <input class="form-control form-control-lg" type="text" placeholder="Cari" aria-label="cari" v-model="cariAll">
  <button @click="resetFilter()">Reset</button>
  <ul>
  <template v-for="dwn in dtdown.downloadarea" :key="dwn.id">
    <li>{{ dwn.nama_file }}</li>
  </template>
</ul>
</template>