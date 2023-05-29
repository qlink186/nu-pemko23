<template>
  <div class="hvr">
    <div class="card mb-4">
      <div class="card-header">
        <h6 class="judulWidget mb-0"><Icon name="solar:tag-bold-duotone" /> Meta Gallery</h6>
      </div>
      <div class="card-body p-2">
        <ul class="list-group list-group-flush sb_gallery">
          <li class="list-group-item list-group-item-action sb_gallery_meta">
            <div class="sb_gallery_meta_judul">Unit Kerja</div>
            <div class="sb_gallery_meta_isi">Dinas Komunikasi dan Informatika</div>
          </li>
          <li class="list-group-item list-group-item-action sb_gallery_meta">
            <div class="sb_gallery_meta_judul">Judul Kegiatan</div>
            <div class="sb_gallery_meta_isi_besar">Pengukuhan Paskibraka Kota Tanjungpinang</div>
          </li>
          <li class="list-group-item list-group-item-action sb_gallery_meta">
            <div class="sb_gallery_meta_judul">Deskripsi</div>
            <div class="sb_gallery_meta_isi">Pengukuhan Paskibraka Kota Tanjungpinang Tahun 2018</div>
          </li>
          <li class="list-group-item list-group-item-action sb_gallery_meta">
            <div class="sb_gallery_meta_judul">Tanggal Kegiatan</div>
            <div class="sb_gallery_meta_isi">Rabu, 15 Agustus 2018</div>
          </li>
          <li class="list-group-item list-group-item-action sb_gallery_meta">
            <div class="sb_gallery_meta_judul">Jumlah Gallery</div>
            <div class="sb_gallery_meta_isi">4 Gambar</div>
          </li>
          <li class="list-group-item list-group-item-action sb_gallery_meta d-grid">
            <NuxtLink to="/gallery" class="btn btn-outline-primary btn-sm" type="button">Lainnya</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
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


.sb{
  &_gallery{
    
    &.list-group{
      .list-group-item{
        border-style: dashed;
        background-color: lighten($abumuda4, 3);
      }
    }
    &_meta{
      &_judul{
        color: $abumuda2;
        font-size: .6rem;
      }
      &_isi{
        &_besar{
          font-size: .85rem;
          font-weight: bold;
          color: $warnadefault;
          transition: all .5s ease-out;
          -moz-transition: all .5s ease-out;
          -webkit-transition: all .5s ease-out;
          -o-transition: all .5s ease-out;
        }
      }
      &:hover{
        .sb{
          &_gallery{
            &.list-group{
                .list-group-item{
                  background-color: inherit;
                }
              }
            &_meta{
              &_judul{
              }
              &_isi{
                &_besar{
                  color: $merah;
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