<script setup lang="ts">

  //meta title
  useHead({
    title: 'Download Area | Pemerintah Kota Tanjungpinang',
  });
    
</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <FormAlbumCari />
        </div>
        <div class="col-lg-9">
          <DownloadAreaDList class="d-none d-md-block" />
          <DownloadAreaMList class="d-block d-md-none" />
        </div>
      </div>
    </div>
  </div>
</template>