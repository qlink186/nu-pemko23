<template>
  <div class="row p-0 m-0 vh-100 text-center align-items-center">
    <div class="col-md-4 offset-md-4 mn">
      <div class="mn_gambar">
        <img src="~/assets/img/lambang_kota_tanjungpinang.png" class="img-fluid align-middle" alt="Logo Pemerintah Kota Tanjungpinang" />
      </div>
      <div class="mn_pemko">PEMERINTAH KOTA</div>
      <div class="mn_tpi">TANJUNGPINANG</div>
      <div class="mn_motto">Kota Gurindam</div>
      <div class="mx-auto mn_menu my-4">
        <ul class="nav justify-content-center">
          <template v-for="mm in mainmenu" :key="mm.id">
            <li class="nav-item mn_menu_item">
              <NuxtLink :to="mm.route" class="mn_menu_item_link">
                <div class="mn_menu_item_link_gambar px-auto">
                  <nuxt-img :src="`/icon/beranda/`+mm.icon" class="img-fluid" :alt="mm.nama_menu" />
                </div>
                <div class="mn_menu_item_link_txt mb-0">{{ mm.nama_menu }}</div>
              </NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()

  const { pending, error, refresh, data: mainmenu } = await useLazyAsyncData(
    'dtdown', 
    () => $fetch(`menu-main`,{
      method: 'GET',
      baseURL: config.public['apiUrl'],
    })
  );
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
.mn{
  &_gambar{
  }
  &_pemko{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: -.7rem;
  }
  &_tpi{
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
  }
  &_motto{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1rem;
  }
  &_menu{
    &_item{
        
        
        margin: .3rem;
      &_link{
        text-decoration: none;
        font-size: .7rem;
        
        &_gambar{
          padding: .7rem .1rem;
          background-color: $abumuda4;
          border: 3px solid $abumuda3;
          border-radius: 1rem;
          width: 3.7rem;
          
          
          img{
            width: 2.2rem;
            aspect-ratio: auto 50/50;
          }
        }
        &_txt{
          max-width: 4rem;
        }
      }
    }
  }
}
</style>