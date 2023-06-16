<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 down_detail">
      <div class="card text-center my-4">
        <div class="card-header d-flex ">
          <!-- <button type="button" class="btn-close justify-content-start me-2" aria-label="Close"></button> -->
          <NuxtLink type="button" class="btn-close me-2 d-flex justify-content-end" aria-label="Close" @click="$router.back()"></NuxtLink>
          <div class="justify-content-center">Unduh Berkas</div>
        </div>
        <div class="card-body">
          <div v-if="pending" class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
            <Loading />
          </div>
          <nuxt-img :src="`/icon/format/`+dtdowndtl.format_file+`.svg`" type="image/svg+xml" class="img-fluid mx-auto d-block mb-3" alt="format" style="width: 80px;" />
          <p class="card-text mb-2" style="font-size:.65rem">{{ dtdowndtl.guid }}</p>
          <h6 class="card-title">{{ dtdowndtl.nama_file }}</h6>
          <p class="card-text mb-2">{{ dtdowndtl.deskripsi_file }}</p>
          <div class="mb-3 card-tgl"><Icon name="ic:twotone-calendar-month" class="pe-1" />{{ dtdowndtl.tanggal_file }}</div>
          <NuxtLink :to="config.public['dashboardUrl']+`/data-download/`+dtdowndtl.guid" class="btn btn-primary btn-sm btnicon"><Icon name="line-md:download-loop" class="btnicon-down" />UNDUH</NuxtLink>
        </div>
        <div class="card-footer text-muted">
          <span class="pe-3 card-footer-opd"><Icon name="ri:government-fill" class="pe-1" />{{ dtdowndtl.nunker }}</span><br />
          <span class="pe-3 card-footer-jnsdok"><Icon name="icon-park-twotone:view-grid-detail" class="pe-1" />{{ dtdowndtl.jenis_file }}</span>
          <span class="pe-3 card-footer-jnsinf"><Icon name="ic:twotone-view-day" class="pe-1" />{{ dtdowndtl.kategori_dip }}</span>
          <br class="d-block d-md-none"/>
          <span class="pe-3 card-footer-tgl"><Icon name="ic:twotone-calendar-month" class="pe-1" />Tanggal Unggah : {{ dtdowndtl.createdAt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
  const route = useRoute()
  const config = useRuntimeConfig()
  
  const { pending, data: dtdowndtl } = await useFetch(config.public['apiUrl']+`download-area/${route.params.slug}`)

  const seoTitle: Ref<string> = ref(dtdowndtl.value.nama_file)
  const seoOgTitle: Ref<string> = ref(dtdowndtl.value.nama_file)
  const seoDescription: Ref<string> = ref(dtdowndtl.value.deskripsi_file)
  const seoOgDescription: Ref<string> = ref(dtdowndtl.value.deskripsi_file)
  const seoOgImage: Ref<string> = ref(config.public['dashboardUrl']+`/icon/format/`+dtdowndtl.value?.format_file+`.svg`)

  useSeoMeta({
    title: seoTitle,
    ogTitle: seoOgTitle,
    description: seoDescription,
    ogDescription: seoOgDescription,
    // ogImage: 'https://example.com/image.png',
    ogImage: seoOgImage,
    twitterCard: 'summary_large_image',
  })
  

</script>


<style lang="scss" scoped>
$hitam:   rgb(39, 41, 42);
$hitam2:  rgb(27, 28, 29);
$abumuda1:  lighten($hitam, 15);
$abumuda2:  lighten($hitam, 40);
$abumuda3:  lighten($hitam, 70);
$abumuda4:  lighten($hitam, 80);
// $biru:    rgb(31, 70, 144);
$biru:    rgb(31, 70, 144);
$biru2:   rgb(23, 70, 162);
// $oren:    rgb(243,171,28);
$oren:    rgb(255, 178, 0);
$hijau:   rgb(27, 156, 133);
$merah:   rgb(194, 16, 16);
$pink:    rgb(154, 22, 99);
$warnadefault: $biru;
$warnasecondary: $oren;

.btnicon{
  // padding: 0 .7rem 0 0;
  font-size: .75rem;
  font-weight: bold;
  letter-spacing: .2rem;
  &-down{
    font-size: 1.2rem;
    margin-right: .5rem;
  }
  &:hover{
    .btnicon-down{
    }
  }
}
.down{
  &_detail{
    .card{
      box-shadow: 0 0 30px 0px $abumuda3;
      -webkit-box-shadow: 0 0 30px 0px $abumuda3;
      -moz-box-shadow: 0 0 30px 0px $abumuda3;
      &-header{
        font-weight: bold;
      }
      &-title{
        font-size: .75rem;
        font-weight: bold;
      }
      &-text{
        font-size: .7rem;
        color: $abumuda1;
      }
      &-tgl{
        color: $warnadefault;
        font-size: .7rem;
        .icon{
          font-size: 1.1rem;
          margin-top: -.15rem;
        }
      }
      &-footer{
        span{
          .icon{
            font-size: 1.1rem;
            margin-top: -.15rem;
          }
        }
        &-opd,
        &-jnsdok,
        &-jnsinf,
        &-tgl{
          font-size: .7rem;
        }
        &-opd{
          color: $merah;
          .icon{}
        }
        &-jnsdok{
          color: $hijau;
          .icon{}
        }
        &-jnsinf{
          color: $warnasecondary;
          .icon{}
        }
        &-tgl{
          color: $biru2;
          .icon{}
        }
      }
    }
  }
}
</style>