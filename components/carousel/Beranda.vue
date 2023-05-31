<script setup>
const slides = ref(Array.from({ length: 10 }, () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  // Figure out contrast color for font
  const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

  return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
}))
</script>

<template>
  <div>
  
    <Swiper
      :height="300"
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
      :slides-per-view="1"
      :pagination="{
        dynamicBullets: true,
        clickable: true,
      }"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <SwiperSlide
        v-for="(slide, idx) in slides"
        :key="idx"
        :style="`background-color: ${slide.bg}; color: ${slide.color}`"
      >
        {{ idx }}
      </SwiperSlide>

      <!-- useSwiper() within a swiper instance -->
      <CarouselSwipperControl />
    </Swiper>
  </div>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <!-- <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> -->
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="card">
          <div class="row">
            <div class="col-lg-9 order-lg-2">
              <img src="https://tanjungpinangkota.go.id/images/berita/big/images.jpeg" class="object-fit-cover rounded-end" alt="...">
            </div>
            <div class="col-lg-3 order-lg-1">
              <div class="card-body carou">
                <div class="d-flex justify-content-between align-items-center carou_meta">
                  <span class="carou_meta_jnsinfo">Berita Unit Kerja</span>
                  <span class="badge badge-danger d-flex text-bg-secondary justify-content-end carou_meta_opd">Diskominfo</span>
                </div>
                <div class="carou_judul">MTQ XII Kota Tanjungpinang Segera Digelar</div>
                <div class="card-text carou_tgl">
                  <span class="txticon pe-3"><Icon name="icon-park-twotone:calendar" />25 Desember 2023</span>
                </div>
                <div class="carou_isi">Diskominfo Tanjungpinang – Perhelatan Musabaqah Tilawatil Qur’an (MTQ) XII tingkat Kota Tanjungpinang 2018 akan segera berlangsung dalam waktu dekat ini.</div>
                <NuxtLink to="/berita/1" class="btn btn-warning btn-sm btnicon carou_tombol"><Icon name="ph:magnifying-glass-plus-bold"/>Selengkapnya</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card">
          <div class="row">
            <div class="col-lg-9 order-lg-2">
              <img src="https://tanjungpinangkota.go.id/images/berita/big/klenteng.jpeg" class="object-fit-cover rounded-end" alt="...">
            </div>
            <div class="col-lg-3 order-lg-1">
              <div class="card-body carou">
                <div class="d-flex justify-content-between align-items-center carou_meta">
                  <span class="carou_meta_jnsinfo">Berita Unit Kerja</span>
                  <span class="badge badge-danger d-flex text-bg-secondary justify-content-end carou_meta_opd">Diskominfo</span>
                </div>
                <div class="carou_judul">Hadiri Perayaan Ulang Tahun ke-33 Klenteng Chi Khong Huo Fooh, Wako Rahma Informasikan Keberadaan MPP</div>
                <div class="carou_tgl">
                  <span class="txticon pe-3"><Icon name="icon-park-twotone:calendar" />25 Desember 2023</span>
                </div>
                <div class="carou_isi">Kota Tanjungpinang - Wali Kota Tanjungpinang, Rahma menghadiri perayaan Ulang Tahun ke-33 Klenteng Chi Khong Huo Fooh, di lorong Teladan, Kelurahan Kemboja, Kota Tanjungpinang, Kepri, Senin (3/10/2022) malam. </div>
                <NuxtLink to="/berita/1" class="btn btn-warning btn-sm btnicon"><Icon name="ph:magnifying-glass-plus-bold"/>Selengkapnya</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> -->
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


.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}


.carousel{
  &-item{
    height: 352px;
  }
  &-control{
    &-next,
    &-prev{
      width: 5%;
    }
    &-next{
      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(39, 41, 42, 0.301) 56%);
      border-top-right-radius: .5rem;
      border-bottom-right-radius: .5rem;
    }
    &-prev{
      background: linear-gradient(90deg, rgba(39, 41, 42, 0.301) 0%, rgba(255, 255, 255, 0)56%);
      border-top-left-radius: .5rem;
      border-bottom-left-radius: .5rem;
    }
  }
}
.object-fit-cover{
  object-fit: cover;
  max-height: 350px;
  object-position: center;
  width: 100%;
}

.carou{
  &_meta{
    margin-bottom: .5rem;
    &_jnsinfo{
      font-weight: 800;
      color: $warnasecondary;
    }
    &_opd{
    }
  }
  &_judul{
    font-weight: 800;
    font-size: .8rem;
    color: $warnadefault;
    padding-bottom: .3rem;
    text-align: justify;
  }
  &_tgl{
    padding-bottom: .5rem;
    
    .txticon{
      font-size: .6rem;
      color: $abumuda2;
      .icon{
        font-size: .8rem;
      }
    }
  }
  &_isi{
    text-align: justify;
    margin-bottom: 1rem;
    color: $abumuda1;
    font-size: .75rem;
    overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 4; /* number of lines to show */
                  line-clamp: 4; 
          -webkit-box-orient: vertical;
  }
  &_tombol{
    font-size: .7rem;
    padding: .15rem .4rem;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>