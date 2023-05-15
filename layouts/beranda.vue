<template>
  <div>
    <LayoutAtasWelcome/>
    <LayoutNavbar />
    <div class="container">
    <CarouselBeranda /></div>

    <!--- render page -->
    <slot />
    <div class="footer">
      <LayoutFooterAtas />
      <LayoutFooterBawah />
    </div>

  </div>
</template>
