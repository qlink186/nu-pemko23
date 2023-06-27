<script setup lang="ts">

  //meta title
  useHead({
    title: 'Indeks Pengelolaan Keuangan Daerah | Pemerintah Kota Tanjungpinang',
  });

  const { x, y, isDark, store } = useUtils()
  
</script>

<template>
  <h1>Indeks Pengelolaan Keuangan Daerah</h1>
  <div>{{ x }} {{ y }} {{ isDark }} {{ store.name }}</div>
</template>