<script setup lang="ts">
  useSeoMeta({
    title: 'Berita Detail',
    ogTitle: 'Berita Detail',
    description: 'HADIRI PERAYAAN ULANG TAHUN KE-33 KLENTENG CHI KHONG HUO FOOH, WAKO RAHMA INFORMASIKAN KEBERADAAN MPP',
    ogDescription: 'HADIRI PERAYAAN ULANG TAHUN KE-33 KLENTENG CHI KHONG HUO FOOH, WAKO RAHMA INFORMASIKAN KEBERADAAN MPP',
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
      <BeritaDetail />
    </template>
  </NuxtLayout>
</template>