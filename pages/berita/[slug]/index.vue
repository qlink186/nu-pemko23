<template>
  <NuxtLayout name="sidebarrtl">
    <template #sdbar>
      <SidebarBeritaKategori />
      <SidebarBeritaPopuler />
    </template>
    <template #konten>
      <BeritaDetail />
    </template>
  </NuxtLayout>
</template>