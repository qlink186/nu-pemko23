<template>
  <div class="list-group list-group-flush">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      The current link item
    </a>
    <a href="#" class="list-group-item list-group-item-action">A second link item</a>
    <a href="#" class="list-group-item list-group-item-action">A third link item</a>
    <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
    <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'Berita | Pemerintah Kota Tanjungpinang',
    ogTitle: 'Berita | Pemerintah Kota Tanjungpinang',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })
</script>