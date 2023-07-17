<template>
  <!-- <div v-if="pending" class="d-flex align-items-center justify-content-center" style="min-height: 800px;">
    <Loading />
  </div>
  <div v-else> -->
    <!-- <input class="form-control form-control-lg" type="text" placeholder="Cari" aria-label="cari" v-model="cariAll" /> -->
    <!-- <select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example" v-model="size" @change="resetPagination()">
      <option selected value="10">10</option>
      <template v-for="sz in sizes" :key="sz">
        <option :value="sz">{{ sz }}</option>
      </template>
    </select> -->
    <!-- <select class="form-select form-select-sm mb-3" aria-label="Jenis File" v-model="cariJenisFile" @change="resetPagination()">
      <option selected value="">-- Semua Jenis File --</option>
      <template v-for="ji in jnsinf" :key="ji.id">
        <option :value="ji.id">{{ ji.jenis_file }}</option>
      </template>
    </select> -->
    <!-- <select class="form-select form-select-sm" aria-label="Unit Kerja" v-model="cariOpd" @change="resetPagination()">
      <option selected value="">-- Semua Unit Kerja --</option>
      <template v-for="opd in daopd" :key="opd.kunker">
        <option :value="opd.kunker">{{ opd.nunker }}</option>
      </template>
    </select> -->
    <!-- <button @click="resetFilter()" class="btn btn-primary btn-sm" type="button">Reset Penyaringan</button> -->
    <ul class="list-group lst_down_ds" v-if="dtdown.downloadarea">
      <template v-if="!dtdown.totalItems">
        <Kosong />
      </template>
      <template v-else>
        <template v-for="dwn in dtdown.downloadarea" :key="dwn.id">
          <li class="list-group-item list-group-item-action d-flex align-items-center lst_down_ds_item">
            <div class="me-auto d-flex align-items-center lst_down_ds_item_desk">
              <div class="lst_down_ds_item_desk_icon">
                <nuxt-img :src="`/icon/format/`+dwn.format_file+`.svg`" type="image/svg+xml" class="img-fluid mx-auto d-block" alt="format" />
              </div>
              <div class="lst_down_ds_item_desk_konten ps-2">
                <div class="lst_down_ds_item_desk_konten_meta">
                  <span class="pe-3 lst_down_ds_item_desk_konten_meta_opd">{{ dwn.nunker }}</span>
                </div>
                <div class="lst_down_ds_item_desk_konten_judul">{{ dwn.nama_file }}</div>
                <div class="lst_down_ds_item_desk_konten_desk" v-if="dwn.deskripsi_file">{{ dwn.deskripsi_file }}</div>
                <div class="lst_down_ds_item_desk_konten_meta">
                  <span class="pe-3 lst_down_ds_item_desk_konten_meta_jnsdok" v-if="dwn.jenis_file"><Icon name="icon-park-twotone:view-grid-detail" class="pe-1" />{{ dwn.jenis_file }}</span>
                  <span class="pe-3 lst_down_ds_item_desk_konten_meta_jnsinf"><Icon name="ic:twotone-view-day" class="pe-1" />{{ dwn.kategori_dip }}</span>
                </div>
              </div>
            </div>
            <div class="align-middle text-center lst_down_ds_item_tgl">{{ dwn.tanggal_file }}</div>
            <div class="lst_down_ds_item_aksi d-grid gap-1 d-md-flex justify-content-md-end">
              <NuxtLink class="btn btn-primary btn-sm" type="button" :to="config.public['dashboardUrl']+`/data-download/`+dwn.guid">
                <Icon name="line-md:download-loop" />
              </NuxtLink>
              <NuxtLink class="btn btn-warning btn-sm" type="button" :to="`/data/download-area/`+dwn.id">
                <Icon name="ph:magnifying-glass-plus-bold"/>
              </NuxtLink>
            </div>
          </li>
        </template>
      </template>
    </ul>
    <template v-if="dtdown.totalItems">
    <div class="text-center">Menampilkan <strong v-if="dtdown.limit > dtdown.totalItems">{{ dtdown.totalItems }}</strong> <strong v-else>{{ dtdown.limit }}</strong> data dari <strong>{{ dtdown.totalItems }}</strong> data</div>
    <div>Jumlah Item : {{ dtdown.totalItems }}</div>
    <div>Limit Perhalaman : {{ dtdown.limit }}</div>
    <div>Jumlah Halaman : {{ dtdown.totalPages}}</div>
    <div>Halaman Saat ini : {{ dtdown.currentPage }}</div>
    <!-- <button @click="previous()" v-if="currentPage > 1">Previous</button> -->
    <Pagination @resetFilter="resetFilter()" @refetch="refetch" @next="next" @previous="previous" :totalPages="dtdown.totalPages" :currentPage="currentPage" />
    <!-- <button @click="next()" v-if="currentPage < dtdown.totalPages">Next</button> -->

    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center pagination-sm">
        <li class="page-item" @click="previous()" v-if="currentPage > 1">
          <NuxtLink class="page-link btn ">Sebelum</NuxtLink> 
          
        </li>
        <template v-if="dtdown.totalPages > 20">
          <li @click="refetch(pageNumber)" v-for="pageNumber in dtdown.totalPages" :key="pageNumber" class="page-item" :class="{'active': currentPage == pageNumber}">
            <template v-if="pageNumber <=20">
              <NuxtLink class="page-link btn">{{ pageNumber }}</NuxtLink>
            </template>
          </li>
          <li class="page-item" ><a class="page-link btn disabled">...</a></li>
          <li @click="refetch(dtdown.totalPages -1)" class="page-item" :class="{'active': currentPage == pageNumber}">
              <NuxtLink class="page-link btn">{{ dtdown.totalPages -1 }}</NuxtLink>
          </li>
          <li @click="refetch(dtdown.totalPages)" class="page-item" :class="{'active': currentPage == pageNumber}">
              <NuxtLink class="page-link btn">{{ dtdown.totalPages}}</NuxtLink>
          </li>
        </template>
        <template v-else>
          <li @click="refetch(pageNumber)" v-for="pageNumber in dtdown.totalPages" :key="pageNumber" class="page-item" :class="{'active': currentPage == pageNumber}">
              <NuxtLink class="page-link btn">{{ pageNumber }}</NuxtLink>
          </li>
        </template>
      
        <li class="page-item" @click="next()" v-if="currentPage < dtdown.totalPages">
          <NuxtLink class="page-link btn">Selanjutnya</NuxtLink>
        </li>
      </ul>
    </nav>
    <strong> {{ limitasi() }}</strong>

  <!-- </div> -->
  </template>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()

  // const { jnsinf, daopd, kategori } = await useDownloadAtribut()

  // const { pending, error, refresh, dtdown, size, sizes, cariAll, cariKat, cariJenisFile, cariOpd, cariPeruntukan, currentPage } = await useDownloadAreaData()
  const {refresh, dtdown, size, cariAll, cariJenisFile, cariOpd, currentPage } = await useDownloadAreaData()

  const limitasi = (a:Array) => {
    if( dtdown.value.totalPages > 20 && currentPage.value < dtdown.value.totalPages){
      return a = currentPage.value + 1;
    }
  }

  const previous = () => {
    if( currentPage.value != 1 ){
      currentPage.value = currentPage.value -1 ;
    }
  }

  const next = () => {
    if( currentPage.value + 1 <= dtdown.value.totalPages){
      currentPage.value = currentPage.value + 1;
    }
  }

  function resetPagination(){
    if( currentPage.value != 1){
      currentPage.value = 1;
      refresh()
    }
  }

  function refetch(pageNumber : Number){
    currentPage.value = pageNumber
    refresh()
  }

  function resetFilter() {
    cariAll.value = '';
    size.value = 10;
    cariOpd.value = '';
    cariJenisFile.value = '';
    currentPage.value = 1;
    refresh()
  }
</script>
