<template>
  <NuxtLayout>
    <!-- <NuxtLoadingIndicator /> -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s | Pemerintah Kota Tanjungpinang',
})
useSeoMeta({
  // title: 'Pemerintah Kota Tanjungpinang',
  // ogTitle: 'Pemerintah Kota Tanjungpinang',
  description: 'Website Resmi Pemerintah Kota Tanjungpinang',
  ogDescription: 'Website Resmi Pemerintah Kota Tanjungpinang',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>