<template>
    <div class="hvr">
    <div class="card mb-4">
      <div class="card-header">
        <h6 class="judulWidget mb-0"><Icon name="solar:stars-bold-duotone" /> Berita Populer</h6>
      </div>
      <div class="card-body p-2">
        <div v-if="pending" class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
          <Loading />
        </div>
        <div class="list-group list-group-flush sb_berita_pop_list">
          <template v-for="(brpop, index) in beritapop" :key="brpop.id">
            <template v-if="brpop.jum_klik">
              <NuxtLink :to="`/berita/`+brpop.guid_baru" class="list-group-item list-group-item-action sb_berita_pop_list_item">
                <div class="d-flex w-100 justify-content-between">
                  <div class="sb_berita_pop_list_item_gambar">
                    <img
                      :src="config.public['dashboardUrl']+`/images/berita/thumb/`+brpop.post_gambar"
                      class="img-fluid rounded"
                      :alt="brpop.judul_post"
                    />
                  </div>
                  <div class="ps-2 me-auto">
                    <h6 class="mb-1 sb_berita_pop_list_item_judul">{{ brpop.judul_post }}</h6>
                    
                      <small class="sb_berita_pop_list_item_meta">
                        <span class="pe-2 sb_berita_pop_list_item_meta_lihat me-2">
                          <Icon name="ic:twotone-remove-red-eye" class="sb_berita_pop_list_item_meta_lihat_icon" /> {{ brpop.jum_klik }}
                        </span>
                      </small>
                  </div>
                  <div class="sb_berita_pop_list_item_rank">#{{ index+1 }}</div>
                </div>
              </NuxtLink>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()

  const { pending, data: beritapop } = await useLazyAsyncData('beritapop', () => $fetch(config.public['apiUrl']+`berita-populer`))
</script>
