<script setup lang="ts">

  //meta title
  useHead({
    title: 'Berita | Pemerintah Kota Tanjungpinang',
  });
    
</script>

<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-12 order-md-1">
          <FormBeritaCari />
        </div>
        <div class="col-md-9 order-md-3">
          <BeritaHome />
        </div>
        <div class="col-md-3 order-md-2">
          <SidebarBeritaKategori />
        </div>
      </div>
    </div>
  </div>
</template>