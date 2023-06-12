<script setup lang="ts">

useSeoMeta({
  title: "Download Area | Pemerintah Kota Tanjungpinang",
  ogTitle: "Download Area | Pemerintah Kota Tanjungpinang",
  description: "Berkas Arsip Digital Pemerintah Kota Tanjungpinang",
  ogDescription: "Berkas Arsip Digital Pemerintah Kota Tanjungpinang",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
// const { isMobile } = device();
</script>
<template>
  <NuxtLayout name="sidebar">
    <template #sdbar>
      <SidebarDownloadareaCari />
    </template>
    <template #konten>
      <div v-if="$device.isMobile">
        <DownloadAreaMList />
      </div>
      <div v-else>
        <DownloadAreaDList />
      </div>
    </template>
  </NuxtLayout>
</template>

