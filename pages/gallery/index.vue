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
          <FormAlbumCari />
        </div>
        <div class="col-md-12 order-md-3">
          <Gallery />
        </div>
      </div>
    </div>
  </div>
</template>