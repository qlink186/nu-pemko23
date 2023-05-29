<script setup lang="ts">
  useSeoMeta({
    title: 'Berita',
    ogTitle: 'Berita | Pemerintah Kota Tanjungpinang',
    // description: 'This is my amazing site, let me tell you all about it.',
    // ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })
</script>

<template>
  <NuxtLayout name="sidebarrtl">
  <template #sdbar>
    <SidebarBeritaKategori />
    <SidebarBeritaPopuler />
  </template>
  <template #konten>
    <Berita />
  </template>
</NuxtLayout>
</template>