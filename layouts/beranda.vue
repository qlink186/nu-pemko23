<template>
  <div class="container">
    <LayoutAtasWelcome />
    <LayoutNavbar />
    <CarouselBeranda />
    <LayoutNavbarBawah />
    <slot />
  </div>
  <div class="container-fluid bgAbu">
    <div class="container py-4">
      <LayananMenuBeranda />
    </div>
  </div>
  <LayoutFooter />
</template>
