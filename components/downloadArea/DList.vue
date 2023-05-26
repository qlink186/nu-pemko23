<template>
  <ul class="list-group list-group-flush lst_down">
    <li class="list-group-item list-group-item-action d-flex align-items-center lst_down_item">
      <div class="me-auto d-flex align-items-center lst_down_item_desk">
        <div class="lst_down_item_desk_icon"><img src="~/assets/img/icon/format/pdf.svg" class="img-fluid mx-auto d-block"
            alt="format"></div>
        <div class="lst_down_item_desk_konten">
          <div class="lst_down_item_desk_konten_judul">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
          <div class="lst_down_item_desk_konten_desk">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            esse dicta qui natus, mollitia earum amet debitis perferendis autem sequi perspiciatis nisi? Dolor ipsa eaque
            veniam magni iste animi molestias.</div>
          <div class="lst_down_item_desk_konten_meta">
            <span class="pe-3 lst_down_item_desk_konten_meta_opd">Diskominfo</span>
            <span class="pe-3 lst_down_item_desk_konten_meta_jnsdok">Pengumuman</span>
            <span class="pe-3 lst_down_item_desk_konten_meta_jnsinf">Serta Merta</span>
          </div>
        </div>
      </div>
      <div class="align-middle text-center lst_down_item_tgl">22 Desember 2023</div>
      <div class="d-grid gap-2 lst_down_item_aksi">
        <button class="btn btn-primary btn-sm" type="button">Download</button>
        <button class="btn btn-warning btn-sm" type="button">Selengkapnya</button>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
$hitam: rgb(39, 41, 42);
$hitam2: rgb(27, 28, 29);
$abumuda1: lighten($hitam, 15);
$abumuda2: lighten($hitam, 40);
$abumuda3: lighten($hitam, 70);
$abumuda4: lighten($hitam, 80);
$biru: rgb(44, 44, 100);
$biru2: rgb(23, 70, 162);
$oren: rgb(243, 171, 28);
$hijau: rgb(27, 156, 133);
$merah: rgb(194, 16, 16);
$pink: rgb(154, 22, 99);
$warnadefault: $biru;
$warnasecondary: $oren;

.lst {
  &_down {
    &_item {
      background-color: $abumuda4;
      border-radius: .5rem;
      border: 1px solid $abumuda3;
      &_desk {
        &_icon {
          min-width: 4rem;

          img {
            width: 60px;
          }
        }

        &_konten {
          max-width: 31rem;

          &_judul {
            font-size: .8rem;
            font-weight: 600;
          }

          &_desk {
            font-size: .7rem;
            color: $abumuda1;
          }

          &_meta {
            color: $abumuda2;
            font-size: .65rem;
            &_opd {}

            &_jnsdok {}

            &_jnsinf {}
          }
        }
      }

      &_tgl {
        color: $abumuda1;
        font-size: .7rem;
        width: 10rem;
      }

      &_aksi {}

      &:hover {
        .lst {
          &_down {
            &_item {
              &_desk {

                &_icon {
                  img {}
                }

                &_konten {
                  max-width: 31rem;

                  &_judul {
                    color: $warnadefault;
                  }

                  &_desk {}

                  &_meta {
                    &_opd {
                      color: $merah;
                    }

                    &_jnsdok {}

                    &_jnsinf {}
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
}</style>