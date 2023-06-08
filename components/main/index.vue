<template>
  <Videobg />
  <div class="row p-0 m-0 vh-100 text-center align-items-center">
    <div class="col-md-4 offset-md-4 mn">
      <div class="mn_gambar">
        <img src="~/assets/img/lambang_kota_tanjungpinang.png" class="img-fluid align-middle" alt="Logo Pemerintah Kota Tanjungpinang" />
      </div>
      <div class="mn_pemko">PEMERINTAH KOTA</div>
      <div class="mn_tpi" data-text= "TANJUNGPINANG">TANJUNGPINANG</div>
      <div class="mx-auto mn_motto">
        <ul class="flip3">
          <li>"Jujur Bertutur Bijak Bertindak"</li>
          <li>"Tak Melayu Hilang Di Bumi"</li>
          <li>"Kota Gurindam"</li>
          <li>"BERAKHLAK"</li>
          <li>"Negeri Pantun"</li>
        </ul>
      </div>
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
        <ul class="nav justify-content-center">
          <li class="nav-item mn_menu_itemberanda">
              <NuxtLink to="/beranda" class="mn_menu_itemberanda_link">
                <div class="mn_menu_itemberanda_link_gambar px-auto">
                  <Icon name="icon-park-twotone:down-c"></Icon>
                </div>
              </NuxtLink>
            </li>
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