<script setup lang="ts">
  useSeoMeta({
    title: 'Download Area | Pemerintah Kota Tanjungpinang',
    ogTitle: 'Download Area | Pemerintah Kota Tanjungpinang',
    description: 'Berkas Arsip Digital Pemerintah Kota Tanjungpinang',
    ogDescription: 'Berkas Arsip Digital Pemerintah Kota Tanjungpinang',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })
</script>
<template>
  <NuxtLayout name="sidebar">
    <template #sdbar>
      <SidebarBeritaKategori />
      <SidebarBeritaPopuler />
    </template>
    <template #konten>
      <DownloadAreaDList class="d-none d-md-block" />
      <DownloadAreaMList class="d-block d-md-none" />
    </template>
  </NuxtLayout>
</template>

