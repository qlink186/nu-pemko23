<script setup lang="ts">

  //meta title
  useSeoMeta({
    title: 'Beranda',
    ogTitle: 'Beranda | Pemerintah Kota Tanjungpinang',
    description: 'Website Resmi Pemerintah Kota Tanjungpinang',
    ogDescription: 'Website Resmi Pemerintah Kota Tanjungpinang',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })

  definePageMeta({
    layout: "beranda",
  });
</script>


<template>
  <div class="row">
    <div class="col-lg-9 order-lg-2">
      <BeritaHome />
    </div>
    <div class="col-lg-3 order-lg-1">
      <Gpr />
    </div>
  </div>
</template>