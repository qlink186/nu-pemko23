<template>
  <footer class="footer">
    <div class="waves">
      <!-- <div class="gedungWako"> -->
        <!-- <img src="~/assets/img/gedung_wako.png" class="img-fluid mx-auto d-block" alt="Gedung Wako"> -->
      <!-- </div> -->
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <div class="container-fluid bgBiru pb-4">
    <div class="container footer_atas">
      <div class="row">
        <div class="col-md-10 order-md-2">
          <div class="row">
            <div class="col-md-5 col-sm-6">
              <LayoutFooterAtasKontak />
              <!-- <LayoutFooterAtasLainnya /> -->
            </div>
            <div class="col-md-2 col-sm-6">
              <LayoutFooterAtasProfil />
            </div>
            <div class="col-md-3 col-sm-12">
              <LayoutFooterAtasSosmed />
            </div>
            <div class="col-md-2 col-sm-12">
              <LayoutFooterAtasJumPengunjung />
            </div>
          </div>
        </div>
        <div class="col-md-2 order-md-1">
          <LayoutFooterAtasIdentitas />
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid bgBiru2">
    <div class="container footer_bawah text-center">
      <p class="my-0">© 2023 <a href="https://kominfo.tanjungpinangkota.go.id/" target="_BLANK">DISKOMINFO</a> Kota Tanjungpinang</p>
    </div>
  </div>
  </footer>
</template>
