<template>
  <div class="hvr">
    <div class="card mb-4">
      <div class="card-header">
        <h6 class="judulWidget mb-0"><Icon name="line-md:search-twotone" /> Penyaringan</h6>
      </div>
      <div class="card-body p-2">
        <!-- <div v-if="pending" class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
          <Loading />
        </div> -->
        <input class="form-control form-control-md mb-3" type="text" placeholder="Cari" aria-label="form-control-lg example">
        <select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
          <option selected value="10">10</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="all">Semua</option>
        </select>

        <select class="form-select form-select-sm mb-3" aria-label="Jenis File">
          <option selected value="0">-- Semua Jenis File --</option>
          <template v-for="ji in jnsinf.downloadarea" :key="ji.id">
            <option :value="ji.id">{{ ji.jenis_file }}</option>
          </template>
        </select>
        <select class="form-select form-select-sm" aria-label="Jenis File">
          <option selected value="0">-- Semua Kategori --</option>
          <template v-for="kat in kategori.downloadarea" :key="kat.id">
            <option :value="kat.id">{{ kat.kategori_dip }}</option>
          </template>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()

  const size = ref(100)
  const cari = ref('')
  const currentPage = ref(0)

  const { pending, error, refresh, data: jnsinf } = await useLazyAsyncData(
    'jnsinf', 
    () => $fetch(`download-area/jenisfile?page=${currentPage.value}&?cari=${cari.value}&?size=${size.value}`,{
      method: 'GET',
      baseURL: config.public['apiUrl'],
      params: {
        currentPage: currentPage.value,
        cari: cari.value,
        size: size.value,
      }
    }), {
      watch: [
        size,
        currentPage,
        cari
      ]
    }
  );

  const { data: kategori } = await useLazyAsyncData(
    'kategori', 
    () => $fetch(`download-area/kat?page=${currentPage.value}&?cari=${cari.value}&?size=${size.value}`,{
      method: 'GET',
      baseURL: config.public['apiUrl'],
      params: {
        currentPage: currentPage.value,
        cari: cari.value,
        size: size.value,
      }
    }), {
      watch: [
        size,
        currentPage,
        cari
      ]
    }
  );
</script>