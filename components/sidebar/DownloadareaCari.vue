<template>
  <div class="hvr">
    <div class="card mb-4">
      <div class="card-header">
        <h6 class="judulWidget mb-0"><Icon name="solar:tag-bold-duotone" /> Penyaringan</h6>
      </div>
      <div class="card-body p-2">
        <!-- <div v-if="pending" class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
          <Loading />
        </div> -->
        <input class="form-control form-control-lg mb-3" type="text" placeholder="Cari" aria-label="form-control-lg example">
        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
          <option selected>10</option>
          <option value="1">10</option>
          <option value="2">25</option>
          <option value="3">50</option>
          <option value="4">100</option>
        </select>

        <ul >
          <li v-for="ji in jnsinf.downloadarea" :key="ji.id">{{ ji.jenis_file }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()
  const cari = ref('asn')
  const { pending, error, refresh, data: jnsinf } = await useLazyAsyncData(
    'jnsinf', 
    () => $fetch(`download-area?cari=${cari.value}`,{
      method: 'GET',
      baseURL: config.public['apiUrl'],
      params: {
        cari: cari.value,
      }
    }), {
      watch: [
        cari
      ]
    }
  );
</script>