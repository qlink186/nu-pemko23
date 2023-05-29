<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 down_detail">
      <div class="card text-center my-4">
        <div class="card-header d-flex ">
          <!-- <button type="button" class="btn-close justify-content-start me-2" aria-label="Close"></button> -->
          <NuxtLink type="button" to="/data/download-area" class="btn-close me-2 d-flex justify-content-end" aria-label="Close"></NuxtLink>
          <div class="justify-content-center">Unduh Berkas</div>
        </div>
        <div class="card-body">
          <img src="~/assets/img/icon/format/pptx.svg" class="img-fluid mx-auto d-block mb-3"
            alt="format" style="width: 80px;">
          <h6 class="card-title">Pengumuman Kelulusan Seleksi Administrasi Pemilihan Calon Anggota Badan Penyelesaian Sengketa Konsumen (BPSK) Kota Tanjungpinang Periode Tahun 2023 - 2028</h6>
          <p class="card-text mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis officia ducimus mollitia voluptates eligendi sit in quod omnis. Minima repudiandae numquam quas dolore voluptates dicta modi architecto officia quae.</p>
          <div class="mb-3 card-tgl"><Icon name="ic:twotone-calendar-month" class="pe-1" />12 Maret 2023</div>
          <a href="#" class="btn btn-primary btn-sm btnicon"><Icon name="line-md:download-loop" class="btnicon-down" />UNDUH</a>
        </div>
        <div class="card-footer text-muted">
          <span class="pe-3 card-footer-opd"><Icon name="ri:government-fill" class="pe-1" />Diskominfo</span>
          <span class="pe-3 card-footer-jnsdok"><Icon name="icon-park-twotone:view-grid-detail" class="pe-1" />Pengumuman</span>
          <span class="pe-3 card-footer-jnsinf"><Icon name="ic:twotone-view-day" class="pe-1" />Serta Merta</span>
          <br class="d-block d-md-none"/>
          <span class="pe-3 card-footer-tgl"><Icon name="ic:twotone-calendar-month" class="pe-1" />Tanggal Unggah : 12 Maret 2023</span>
        </div>
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