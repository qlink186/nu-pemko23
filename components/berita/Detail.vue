<template>
  <div class="berita_detail mb-4">
    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      <h6 class="berita_detail_judul judulWidget">{{ beritadtl.judul_post }}</h6>
      <div class="berita_detail_meta_atas">
        <span class="berita_detail_meta_atas_opd"><Icon name="ri:government-fill" class="me-1" />{{ beritadtl.nunker }}</span>
        <span class="berita_detail_meta_atas_tgl"><Icon name="ic:twotone-calendar-month" class="me-1" />{{ beritadtl.tanggal_terbit }}</span>
      </div>
      <div class="berita_detail_gambar">
        <img
          :src="config.public['dashboardUrl']+`/images/berita/big/`+beritadtl.post_gambar"
          class="img-fluid rounded my-2"
          :alt="beritadtl.judul_post"
        />
      </div>
      <div class="berita_detail_isi">
        <div v-html="beritadtl.isi_post"></div>
      </div>
      <div class="d-flex w-100 justify-content-between berita_detail_meta_bawah">
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item berita_detail_meta_bawah_penulis"><Icon name="ic:twotone-person" class="me-1" />{{ beritadtl.penulis }}</li>
          <li class="list-group-item berita_detail_meta_bawah_kat">
            <NuxtLink :to="`/berita/kat/`+beritadtl.kat_guid">
              <Icon name="icon-park-twotone:tag-one" class="me-1" />{{ beritadtl.kategori_post }}
            </NuxtLink>
          </li>
          <li class="list-group-item berita_detail_meta_bawah_komen" v-if="beritadtl.jum_komen_terbit"><Icon name="ic:twotone-mode-comment" class="me-1" />{{ beritadtl.jum_komen_terbit }} Komentar</li>
          <li class="list-group-item berita_detail_meta_bawah_lihat" v-if="beritadtl.jum_klik"><Icon name="ic:twotone-remove-red-eye" class="me-1" />{{ beritadtl.jum_klik }} Pratayang</li>
          <li class="list-group-item berita_detail_meta_bawah_tag">{{ beritadtl.tag }}</li>
        </ul>
      </div>
    </div>
    </div>
    
  <div>
    <h6 class="judulWidget"><Icon name="material-symbols:gallery-thumbnail-rounded" class="me-1" />DOKUMENTASI</h6>
    <GalleryBerita />
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  const config = useRuntimeConfig()
  // const { pending, data: beritadtl } = await useLazyAsyncData('beritadtl', () => $fetch(qapi))
  const { pending, data: beritadtl } = await useFetch(config.public['apiUrl']+`berita/${route.params.slug}`)

  useSeoMeta({
    title: beritadtl.value?.judul_post,
    ogTitle: beritadtl.value?.judul_post,
    description: beritadtl.value?.isi_ringkasan,
    ogDescription: beritadtl.value?.isi_ringkasan,
    // ogImage: 'https://example.com/image.png',
    ogImage: config.public['dashboardUrl']+`/images/berita/big/`+beritadtl.value?.post_gambar,
    twitterCard: 'summary_large_image',
  })

</script>