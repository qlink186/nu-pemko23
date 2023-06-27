<script setup lang="ts">

  //meta title
  useHead({
    title: 'Indeks Pengelolaan Keuangan Daerah | Pemerintah Kota Tanjungpinang',
  });

  const { x, y, isDark, store, online } = useUtils()
  
</script>

<template>
  <h1>Indeks Pengelolaan Keuangan Daerah</h1>
  <div>{{ x }} {{ y }} {{ isDark }} {{ store.name }}</div>
  <div v-if="!online">Offline</div>
  <div v-else>Online</div>
</template>