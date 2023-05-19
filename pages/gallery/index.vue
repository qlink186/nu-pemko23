<script setup lang="ts">

  //meta title
  useHead({
    title: 'Gallery | Pemerintah Kota Tanjungpinang',
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
          <Gallery />
        </div>
        <div class="col-md-3 order-md-2">
          <SidebarBeritaPopuler />
        </div>
      </div>
    </div>
  </div>
</template>