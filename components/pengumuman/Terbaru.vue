<template>
  <h6 class="judulWidget">
    <Icon name="ic:twotone-fiber-new" class="pe-1" />PENGUMUMAN TERKINI
  </h6>
  <FormBeritaCari />
  <div class="row">
    <div class="col-lg-6">
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-4">
              <img src="https://picsum.photos/id/27/300/400" class="card-img rounded mx-auto d-block" alt="format" />
            </div>
            <div class="col-lg-8 align-middle">
              <h6 class="card-title">Pengumuman Kelulusan Seleksi Administrasi Pemilihan Calon Anggota Badan Penyelesaian Sengketa Konsumen (BPSK) Kota Tanjungpinang Periode Tahun 2023 - 2028</h6>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div>
                <span class="txticon pe-3"><Icon name="solar:hashtag-bold-duotone" class="pe-1" />555.16/0123/5.16.03/2022</span>
                <span class="txticon pe-3"><Icon name="icon-park-twotone:calendar" />25 Desember 2023</span>
                <span class="txticon"><Icon name="ic:twotone-remove-red-eye" />300</span>
              </div>
              <div class="text-end">
                <NuxtLink to="/pengumuman/1" class="btn btn-warning btn-sm btnicon"><Icon name="ph:magnifying-glass-plus-bold"/>Selengkapnya</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-4">
              <img src="https://picsum.photos/id/27/300/400" class="card-img rounded mx-auto d-block" alt="format" />
            </div>
            <div class="col-lg-8 align-middle">
              <h6 class="card-title">PEMILIHAN CALON ANGGOTA BADAN PENYELESAIAN SENGKETA KONSUMEN (BPSK) KOTA TANJUNGPINANG PERIODE 2023 - 2029</h6>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div>
                <span class="txticon pe-3"><Icon name="solar:hashtag-bold-duotone" class="pe-1" />555.16/0123/5.16.03/2022</span>
                <span class="txticon pe-3"><Icon name="icon-park-twotone:calendar" />25 Desember 2023</span>
                <span class="txticon"><Icon name="ic:twotone-remove-red-eye" />300</span>
              </div>
              <div class="text-end">
                <NuxtLink to="/pengumuman/1" class="btn btn-warning btn-sm btnicon"><Icon name="ph:magnifying-glass-plus-bold"/>Selengkapnya</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-4">
              <img src="https://picsum.photos/id/27/300/400" class="card-img rounded mx-auto d-block" alt="format" />
            </div>
            <div class="col-lg-8 align-middle">
              <h6 class="card-title">Pengumuman Kelulusan Seleksi Administrasi Pemilihan Calon Anggota Badan Penyelesaian Sengketa Konsumen (BPSK) Kota Tanjungpinang Periode Tahun 2023 - 2028</h6>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div>
                <span class="txticon pe-3"><Icon name="solar:hashtag-bold-duotone" class="pe-1" />555.16/0123/5.16.03/2022</span>
                <span class="txticon pe-3"><Icon name="icon-park-twotone:calendar" />25 Desember 2023</span>
                <span class="txticon"><Icon name="ic:twotone-remove-red-eye" />300</span>
              </div>
              <div class="text-end">
                <NuxtLink to="/pengumuman/1" class="btn btn-warning btn-sm btnicon"><Icon name="ph:magnifying-glass-plus-bold"/>Selengkapnya</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
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

.card{
  &-header{
    &.txticon{
      font-size: .75rem;
      font-weight: 600;
      .icon{
        font-size: 1rem;
        margin-top: -2px;
        margin-right: .15rem;
        font-weight: inherit;
      }
    }
  }

  &-title{
    font-size: .75rem;
    font-weight: 600;
    text-align: justify;
    color: $warnadefault;
    // font-family: 'Montserrat', sans-serif;
  }
  &-text{
    color: $abumuda1;
    text-align: justify;
  }
}

</style>