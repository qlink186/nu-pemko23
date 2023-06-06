<template>
  <div class="hvr">
    <div class="card mb-4">
      <div class="card-header">
        <h6 class="judulWidget mb-0"><Icon name="solar:tag-bold-duotone" /> Kategori Berita</h6>
      </div>
      <div class="card-body p-2">
        <div v-if="pending" class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
          <Loading />
        </div>
        <div class="list-group list-group-flush sb_berita_kat_list">
          <template v-for="(brkat, index) in beritakat" :key="brkat.id">
            <NuxtLink :to="`/berita/kat/`+brkat.kat_guid" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center sb_berita_kat_list_item"
              aria-current="true">
              {{ brkat.kategori_post }}
              <span class="badge rounded-pill sb_berita_kat_list_item_badge">{{ brkat.jum_kat }}</span>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()
  const { pending, data: beritakat } = await useLazyAsyncData('beritakat', () => $fetch(config.public['apiUrl']+`berita-kat`))
  // const { pending, data: beritakat } = await useFetch(config.public['apiUrl']+`berita-kat`)
</script>