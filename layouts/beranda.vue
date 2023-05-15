<template>
  <div>
    <LayoutAtasWelcome />
    <LayoutNavbar />
    <div class="container">
      <CarouselBeranda />
    </div>
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-9 order-lg-2">
          <BeritaHome />
        </div>
        <div class="col-lg-3 order-lg-1 border" style="min-height:600px;">
          <h1>GPR</h1>
        </div>
      </div>
    </div>
    <!--- render page -->
    <slot />
    <div class="footer">
      <LayoutFooterAtas />
      <LayoutFooterBawah />
    </div>
  </div>
</template>
