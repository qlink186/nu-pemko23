<template>
  <div v-if="pending" class="d-flex align-items-center justify-content-center" style="min-height: 800px;">
    <Loading />
  </div>
  <div v-else>
    <ul class="list-group lst_down_ds" v-if="dtdown.downloadarea">
      <template v-for="dwn in dtdown.downloadarea" :key="dwn.id">
        <li class="list-group-item list-group-item-action d-flex align-items-center lst_down_ds_item">
          <div class="me-auto d-flex align-items-center lst_down_ds_item_desk">
            <div class="lst_down_ds_item_desk_icon">
              <nuxt-img :src="`/icon/format/`+dwn.format_file+`.svg`" type="image/svg+xml" class="img-fluid mx-auto d-block" alt="format" />
            </div>
            <div class="lst_down_ds_item_desk_konten ps-2">
              <div class="lst_down_ds_item_desk_konten_meta">
                <span class="pe-3 lst_down_ds_item_desk_konten_meta_opd">{{ dwn.nunker }}</span>
              </div>
              <div class="lst_down_ds_item_desk_konten_judul">{{ dwn.nama_file }}</div>
              <div class="lst_down_ds_item_desk_konten_desk" v-if="dwn.deskripsi_file">{{ dwn.deskripsi_file }}</div>
              <div class="lst_down_ds_item_desk_konten_meta">
                <span class="pe-3 lst_down_ds_item_desk_konten_meta_jnsdok" v-if="dwn.jenis_file"><Icon name="icon-park-twotone:view-grid-detail" class="pe-1" />{{ dwn.jenis_file }}</span>
                <span class="pe-3 lst_down_ds_item_desk_konten_meta_jnsinf"><Icon name="ic:twotone-view-day" class="pe-1" />{{ dwn.kategori_dip }}</span>
              </div>
            </div>
          </div>
          <div class="align-middle text-center lst_down_ds_item_tgl">{{ dwn.tanggal_file }}</div>
          <div class="lst_down_ds_item_aksi d-grid gap-1 d-md-flex justify-content-md-end">
            <NuxtLink class="btn btn-primary btn-sm" type="button" :to="config.public['dashboardUrl']+`/data-download/`+dwn.guid">
              <Icon name="line-md:download-loop" />
            </NuxtLink>
            <NuxtLink class="btn btn-warning btn-sm" type="button" :to="`/data/download-area/`+dwn.id">
              <Icon name="ph:magnifying-glass-plus-bold"/>
            </NuxtLink>
          </div>
        </li>
      </template>
    </ul>
    <div class="text-center">Menampilkan <strong>{{ dtdown.limit }}</strong> data dari <strong>{{ dtdown.totalItems }}</strong> data</div>
    <div>Jumlah Item : {{ dtdown.totalItems }}</div>
    <div>Limit Perhalaman : {{ dtdown.limit }}</div>
    <div>Jumlah Halaman : {{ dtdown.totalPages}}</div>
    <div>Halaman Saat ini : {{ dtdown.currentPage }}</div>
    <!-- <button @click="previous()" v-if="currentPage > 1">Previous</button> -->
    <Pagination @ganti="refetch" @next="next" @previous="previous" :totalPages="dtdown.totalPages" :currentPage="currentPage" />
    <!-- <button @click="next()" v-if="currentPage < dtdown.totalPages">Next</button> -->
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()

  const size = ref()
  const cariAll = ref('')
  const cariKat = ref('')
  const cariJenisFile = ref('')
  const cariOpd = ref('')
  const cariPeruntukan = ref('')
  const currentPage = ref(0)

  const { pending, error, refresh, data: dtdown } = await useLazyAsyncData(
    'dtdown', 
    () => $fetch(`download-area?page=${currentPage.value}&size=${size.value}&cariAll=${cariAll.value}&cariKat=${cariKat.value}&cariJenisFile=${cariJenisFile.value}&cariOpd=${cariOpd.value}&cariPeruntukan${cariPeruntukan.value}`,{
      key: `userlist-${currentPage.value}`,
      method: 'GET',
      baseURL: config.public['apiUrl'],
      params: {
        currentPage: currentPage.value,
        size: size.value,
        cariAll: cariAll.value,
        cariKat: cariKat.value,
        cariJenisFile: cariJenisFile.value,
        cariOpd: cariOpd.value,
        cariPeruntukan: cariPeruntukan.value,
      }
    }), {
      watch: [
        size,
        currentPage,
        cariAll,
        cariKat,
        cariJenisFile,
        cariOpd,
        cariPeruntukan,
      ]
    }
  );

  const previous = () => {
    if( currentPage.value != 0 ){
      currentPage.value = currentPage.value -1 ;
    }
  }

  const next = () => {
    if( currentPage.value + 0 <= dtdown.value.totalPages){
      currentPage.value = currentPage.value + 1;
    }
  }

  function refetch(pageNumber : Number){
    currentPage.value = pageNumber
    refresh()
  }

  // const { pending, data: dtdown } = await useFetch(config.public['apiUrl']+`download-area`)
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

.lst {
  &_down {
    &_ds {
      &_item {
        background-color: lighten($abumuda4,2);
        border-radius: .5rem;
        border: 1px solid $abumuda3;
        margin-bottom: 1rem;
        padding: .75rem;
        transition: all .5s ease-out;
        -moz-transition: all .5s ease-out;
        -webkit-transition: all .5s ease-out;
        -o-transition: all .5s ease-out;
        &_desk {
          &_icon {
            min-width: 3.5rem;

            img {
              width: 50px;
              filter: grayscale(1);
              transition: all .5s ease-out;
              -moz-transition: all .5s ease-out;
              -webkit-transition: all .5s ease-out;
              -o-transition: all .5s ease-out;
            }
          }

          &_konten {
            max-width: 30rem;

            &_judul {
              font-size: .8rem;
              font-weight: 600;
              transition: all .5s ease-out;
              -moz-transition: all .5s ease-out;
              -webkit-transition: all .5s ease-out;
              -o-transition: all .5s ease-out;
            }

            &_desk {
              font-size: .7rem;
              color: $abumuda1;
            }

            &_meta {
              color: $abumuda2;
              font-size: .7rem;
              transition: all .5s ease-out;
              -moz-transition: all .5s ease-out;
              -webkit-transition: all .5s ease-out;
              -o-transition: all .5s ease-out;
              &_opd,
              &_jnsdok,
              &_jnsinf{
                transition: all .5s ease-out;
                -moz-transition: all .5s ease-out;
                -webkit-transition: all .5s ease-out;
                -o-transition: all .5s ease-out;
                .icon{
                  font-size: .95rem;
                  margin-top: -2px;
                }
              }
              &_opd {
              }

              &_jnsdok {
              }

              &_jnsinf {
              }
            }
          }
        }

        &_tgl {
          color: $abumuda1;
          font-size: .7rem;
          width: 10rem;
        }

        &_aksi {
          width: 4.7rem;
          .btn{
            font-size: 1.1rem;
            padding: 0 .3rem;
            border-radius: .4rem;
          }
        }

        &:hover {
          background-color: inherit;
          border-color: lighten($abumuda2,20);
          box-shadow: 0 0 10px 0px $abumuda3;
            -webkit-box-shadow: 0 0 10px 0px $abumuda3;
            -moz-box-shadow: 0 0 10px 0px $abumuda3;
          .lst {
            &_down {
              &_ds {
                &_item {
                  &_desk {

                    &_icon {
                      img {
                        filter: grayscale(0);
                      }
                    }

                    &_konten {

                      &_judul {
                        color: $warnadefault;
                      }

                      &_desk {}

                      &_meta {
                        &_opd {
                          color: $merah;
                        }

                        &_jnsdok {
                          color: $hijau;
                        }

                        &_jnsinf {
                          color: $oren;
                        }
                      }
                    }
                  }

                  &_tgl {
                    width: 10rem;
                  }

                  &_aksi {}
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>