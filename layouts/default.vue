<template>
  <div>
    <LayoutAtasDefault />
    <LayoutNavbar />

    <!--- render page -->
    <slot />
    <div class="footer">
      <LayoutFooterAtas />
      <LayoutFooterBawah />
    </div>

  </div>
</template>
