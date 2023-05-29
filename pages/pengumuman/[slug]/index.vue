<script setup lang="ts">

  //meta title
  useHead({
    title: 'Pengumuman Detail | Pemerintah Kota Tanjungpinang',
  });
    
</script>

<template>
  <NuxtLayout name="sidebarrtl">
    <template #sdbar>
      <SidebarGalleryAlbumDetail />
    </template>
    <template #konten>
      <PengumumanDetail />
    </template>
  </NuxtLayout>
</template>