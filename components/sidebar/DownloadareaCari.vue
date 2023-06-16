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
          <template v-for="(sz, index) in size" :key="index">
            <option :value="sz">{{ sz }}</option>
          </template>
        </select>

        <select class="form-select form-select-sm mb-3" aria-label="Jenis File">
          <option selected value="null">-- Semua Jenis File --</option>
          <template v-for="ji in jnsinf" :key="ji.id">
            <option :value="ji.id">{{ ji.jenis_file }}</option>
          </template>
        </select>
        <select class="form-select form-select-sm mb-3" aria-label="Jenis File">
          <option selected value="null">-- Semua Kategori --</option>
          <template v-for="kat in kategori" :key="kat.id">
            <option :value="kat.id">{{ kat.kategori_dip }}</option>
          </template>
        </select>

        <select class="form-select form-select-sm" aria-label="Jenis File">
          <option selected value="null">-- Semua Unit Kerja --</option>
          <template v-for="opd in daopd" :key="opd.kunker">
            <option :value="opd.kunker">{{ opd.nunker }}</option>
          </template>
        </select>
      </div>
    </div>
  </div>

  
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()

  const size = [ 10, 25, 50, 100, "Semua"]
  const carijenisfile: Ref<string> = ref('')
  const carikat: Ref<string> = ref('')
  const cariopd: Ref<string> = ref('')

  const { data: jnsinf } = await useLazyAsyncData(
    'jnsinf', 
    () => $fetch(`download-area/jenisfile?cari=${carijenisfile.value}`,{
      method: 'GET',
      baseURL: config.public['apiUrl'],
      params: {
        cari: carijenisfile.value
      }
    }), {
      watch: [
        carijenisfile
      ]
    }
  );

  const { data: kategori } = await useLazyAsyncData(
    'kategori', 
    () => $fetch(`download-area/kat?cari=${carikat.value}`,{
      method: 'GET',
      baseURL: config.public['apiUrl'],
      params: {
        cari: carikat.value
      }
    }), {
      watch: [
        carikat
      ]
    }
  );

  const { data: daopd } = await useLazyAsyncData(
    'daopd', 
    () => $fetch(`download-area/opd?cari=${cariopd.value}`,{
      method: 'GET',
      baseURL: config.public['apiUrl'],
      params: {
        cari: cariopd.value
      }
    }), {
      watch: [
      cariopd
      ]
    }
  );
</script>