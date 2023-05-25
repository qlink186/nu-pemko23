<template>
  <h6 class="judulWidget"><Icon name="solar:tag-bold-duotone" /> Meta Gallery</h6>
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
      <button class="btn btn-outline-primary btn-sm" type="button">Lainnya</button>
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
$biru:    rgb(44,44,100);
$biru2:   rgb(23, 70, 162);
$oren:    rgb(243,171,28);
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