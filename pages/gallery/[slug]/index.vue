<script setup lang="ts">

  //meta title
  useHead({
    title: 'Gallery Detail | Pemerintah Kota Tanjungpinang',
  });
    
</script>

<template>
  <NuxtLayout name="sidebarrtl">
    <template #sdbar>
      <SidebarGalleryAlbumDetail />
    </template>
    <template #konten>
      <GalleryAlbumDetail />
    </template>
  </NuxtLayout>
</template>