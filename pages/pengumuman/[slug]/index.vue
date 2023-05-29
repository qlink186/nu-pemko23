<script setup lang="ts">

  //meta title
  useHead({
    title: 'Pengumuman Detail | Pemerintah Kota Tanjungpinang',
  });
    
</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 order-lg-2">
          <PengumumanDetail />
        </div>
        <div class="col-lg-3 order-lg-1">
          <SidebarBeritaPopuler />
        </div>
      </div>
    </div>
  </div>
</template>