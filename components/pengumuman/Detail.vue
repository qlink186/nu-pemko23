<template>
  <h6 class="judulWidget">Pengumuman Kelulusan Seleksi Administrasi Pemilihan Calon Anggota Badan Penyelesaian Sengketa Konsumen (BPSK) Kota Tanjungpinang Periode Tahun 2023 - 2028</h6>
  <ul class="list-group lst_down">
    <li class="list-group-item list-group-item-action d-flex align-items-center lst_down_item">
      <div class="me-auto d-flex align-items-center lst_down_item_desk">
        <div class="lst_down_item_desk_icon"><img src="https://picsum.photos/id/24/400/500" class="img-fluid rounded mx-auto d-block" alt="format"></div>
        <div class="lst_down_item_desk_konten ps-3">
          <div class="pe-3 lst_down_item_desk_konten_meta_opd"><Icon name="ri:government-fill" class="pe-1" />Pemerintah Kota Tanjungpinang</div>
          <div class="lst_down_item_desk_konten_judul">Pengumuman Kelulusan Seleksi Administrasi Pemilihan Calon Anggota Badan Penyelesaian Sengketa Konsumen (BPSK) Kota Tanjungpinang Periode Tahun 2023 - 2028</div>
          <div class="lst_down_item_desk_konten_desk">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloresesse dicta qui natus, mollitia earum amet debitis perferendis autem sequi perspiciatis nisi? Dolor ipsa eaque veniam magni iste animi molestias.</div>
          <div class="lst_down_item_desk_konten_meta">
            <span class="pe-3 lst_down_item_desk_konten_meta_jnsinf"><Icon name="solar:hashtag-bold-duotone" class="pe-1" />555.16/0123/5.16.03/2022</span>
            <span class="pe-3 lst_down_item_desk_konten_meta_jnsdok"><Icon name="icon-park-twotone:calendar" class="pe-1" />Terbit : 23 April 2023 - 25 Desember 2023</span>
          </div>
        </div>
      </div>
      <div class="lst_down_item_aksi d-grid gap-1 d-md-flex justify-content-md-end d-none d-md-block">
        <NuxtLink class="btn btn-warning btn-sm" type="button" to="/pengumuman/1">
          <Icon name="ph:magnifying-glass-plus-bold"/><span class="ps-2">Selengkapnya</span>
        </NuxtLink>
      </div>
      <div class="lst_down_item_aksi d-grid gap-1 d-md-flex justify-content-md-end d-block d-md-none">
        <NuxtLink class="btn btn-warning btn-sm" type="button" to="/pengumuman/1">
          <Icon name="ph:magnifying-glass-plus-bold"/>
        </NuxtLink>
      </div>
    </li>
  </ul>
</template>

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
          min-width: 5rem;

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
          max-width: 50rem;

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
        width: 7.3rem;
        .btn{
          font-size: 1.1rem;
          padding: 0 .3rem;
          border-radius: .4rem;
          span{
            font-size: .75rem;
          }
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
</style>