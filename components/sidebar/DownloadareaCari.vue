<template>
  <div class="hvr">
    <div class="card mb-4">
      <div class="card-header">
        <h6 class="judulWidget mb-0"><Icon name="line-md:search-twotone" /> Penyaringan</h6>
      </div>
      <div class="card-body p-2">
        <input class="form-control form-control-lg mb-3" type="text" placeholder="Cari" aria-label="cari" v-model="cariAll">
        <select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example" v-model="size" >
          <option selected value="10">10</option>
          <template v-for="(sz, index) in sizes" :key="index">
            <option :value="sz">{{ sz }}</option>
          </template>
        </select>
        <select class="form-select form-select-sm mb-3" aria-label="Jenis File" v-model="cariJenisFile">
          <option selected value="">-- Semua Jenis File --</option>
          <template v-for="ji in jnsinf" :key="ji.id">
            <option :value="ji.id">{{ ji.jenis_file }}</option>
          </template>
        </select>
        <!-- <select class="form-select form-select-sm mb-3" aria-label="Kategori File" v-model="cariKat">
          <option selected value="">-- Semua Kategori --</option>
          <template v-for="kat in kategori" :key="kat.id">
            <option :value="kat.id">{{ kat.kategori_dip }}</option>
          </template>
        </select> -->
        <select class="form-select form-select-sm" aria-label="Unit Kerja" v-model="cariOpd">
          <option selected value="">-- Semua Unit Kerja --</option>
          <template v-for="opd in daopd" :key="opd.kunker">
            <option :value="opd.kunker">{{ opd.nunker }}</option>
          </template>
        </select>
        <button @click="resetFilter()" class="btn btn-primary btn-sm mt-3" type="button">Reset Penyaringan</button>
      </div>
    </div>
  </div>

  
</template>

<script setup lang="ts">
  // const config = useRuntimeConfig()

  const { jnsinf, daopd, kategori } = await useDownloadAtribut()

  const { size, sizes, cariAll, cariJenisFile, cariOpd, currentPage } = await useDownloadAreaData()

  // let size:Ref<number> = ref(10)
  // const sizes = [ 25, 50, 100]
  // const cariAll:Ref<string>  = ref('')
  // const cariKat:Ref<string> = ref('')
  // const cariJenisFile:Ref<string> = ref('')
  // const cariOpd:Ref<string> = ref('')
  // const cariPeruntukan:Ref<string> = ref('')

    // defineEmits(['ganti','next', 'previous'])

  function resetFilter() {
    cariAll.value = '';
    size.value = 10;
    cariOpd.value = '';
    cariJenisFile.value = '';
    currentPage.value = 1;
  }

</script>