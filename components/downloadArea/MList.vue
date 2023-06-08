<template>
  <div v-if="pending" class="d-flex align-items-center justify-content-center" style="min-height: 200px;">
    <Loading />
  </div>
  <div v-else>
    <ul class="list-group lst_down_mb">
      <template v-for="(dwn, index) in dtdown.downloadarea" :key="dwn.id">
        <li class="list-group-item list-group-item-action lst_down_mb_item">
          <div class="me-auto lst_down_mb_item_desk">
            <div class="lst_down_mb_item_desk_icon">
              <nuxt-img :src="`/icon/format/`+dwn.format_file+`.svg`" type="image/svg+xml" class="img-fluid mx-auto d-block" alt="format" />
            </div>
            <div class="lst_down_mb_item_desk_konten ps-2">
              <div class="lst_down_mb_item_desk_konten_judul">{{ dwn.nama_file }}</div>
              <div class="lst_down_mb_item_desk_konten_desk" v-if="dwn.deskripsi_file">{{ dwn.deskripsi_file }}</div>
              <div class="lst_down_mb_item_desk_konten_meta">
                <span class="pe-3 lst_down_mb_item_desk_konten_meta_opd"><Icon name="ri:government-fill" class="pe-1" />{{ dwn.nunker }}</span>
                <span class="pe-3 lst_down_mb_item_desk_konten_meta_jnsdok" v-if="dwn.jenis_file"><Icon name="icon-park-twotone:view-grid-detail" class="pe-1" />{{ dwn.jenis_file }}</span>
                <span class="pe-3 lst_down_mb_item_desk_konten_meta_jnsinf"><Icon name="ic:twotone-view-day" class="pe-1" />{{ dwn.kategori_dip }}</span>
              </div>
            </div>
          </div>
          <div class="align-middle text-center lst_down_mb_item_tgl">{{ dwn.tanggal_file }}</div>
          <div class="d-flex">
            <div class="flex-fill pe-1 d-grid gap-2">
              <NuxtLink class="btn btn-primary" type="button" :to="config.public['dashboardUrl']+`/data-download/`+dwn.guid">
                <Icon name="line-md:download-loop" />Download
              </NuxtLink>
            </div>
            <div class="flex-fill ps-1 d-grid gap-2">
              <NuxtLink class="btn btn-warning" type="button" :to="`/data/download-area/`+dwn.id">
                <Icon name="ph:magnifying-glass-plus-bold"/>Selengkapnya
              </NuxtLink>
            </div>
            
          </div>
        </li>
      </template>
      <!-- <li class="list-group-item list-group-item-action lst_down_mb_item">
        <div class="me-auto lst_down_mb_item_desk">
          <div class="lst_down_mb_item_desk_icon"><img src="~/assets/img/icon/format/pdf.svg" class="img-fluid mx-auto d-block"
              alt="format"></div>
          <div class="lst_down_mb_item_desk_konten ps-2">
            <div class="lst_down_mb_item_desk_konten_judul">Pengumuman Kelulusan Seleksi Administrasi Pemilihan Calon Anggota Badan Penyelesaian Sengketa Konsumen (BPSK) Kota Tanjungpinang Periode Tahun 2023 - 2028</div>
            <div class="lst_down_mb_item_desk_konten_desk">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              esse dicta qui natus, mollitia earum amet debitis perferendis autem sequi perspiciatis nisi? Dolor ipsa eaque
              veniam magni iste animi molestias.</div>
            <div class="lst_down_mb_item_desk_konten_meta">
              <span class="pe-3 lst_down_mb_item_desk_konten_meta_opd"><Icon name="ri:government-fill" class="pe-1" />Diskominfo</span>
              <span class="pe-3 lst_down_mb_item_desk_konten_meta_jnsdok"><Icon name="icon-park-twotone:view-grid-detail" class="pe-1" />Pengumuman</span>
              <span class="pe-3 lst_down_mb_item_desk_konten_meta_jnsinf"><Icon name="ic:twotone-view-day" class="pe-1" />Serta Merta</span>
            </div>
          </div>
        </div>
        <div class="align-middle text-center lst_down_mb_item_tgl">22 Desember 2023</div>
        <div class="d-flex">
          <div class="flex-fill pe-1 d-grid gap-2">
            <button class="btn btn-primary" type="button">
              <Icon name="line-md:download-loop" />Download
            </button>
          </div>
          <div class="flex-fill ps-1 d-grid gap-2">
            <NuxtLink class="btn btn-warning" type="button" to="/data/download-area/1">
              <Icon name="ph:magnifying-glass-plus-bold"/>Selengkapnya
            </NuxtLink>
          </div>
        </div>
      </li> -->
    </ul>
  </div>
  
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()

  const { pending, error, refresh, data: dtdown } = await useLazyAsyncData(
    'dtdown', 
    () => $fetch(`download-area`,{
      method: 'GET',
      baseURL: config.public['apiUrl'],
    })
  );

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
    &_mb {
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
              width: 80px;
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
              font-size: .9rem;
              font-weight: 600;
              transition: all .5s ease-out;
              -moz-transition: all .5s ease-out;
              -webkit-transition: all .5s ease-out;
              -o-transition: all .5s ease-out;
            }

            &_desk {
              font-size: .8rem;
              color: $abumuda1;
            }

            &_meta {
              color: $abumuda2;
              font-size: .8rem;
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
          font-size: .8rem;
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
              &_mb {
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