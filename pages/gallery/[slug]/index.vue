<script setup lang="ts">

  //meta title
  useHead({
    title: 'Gallery Detail | Pemerintah Kota Tanjungpinang',
  });
    
</script>
<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <SidebarGalleryAlbumDetail />
        </div>
        <div class="col-md-9">
          <GalleryAlbumDetail />
        </div>
      </div>
    </div>
  </div>
</template>