<template>
  <h6 class="mt-3">LAINNYA</h6>
  <ul class="list-group list-group-flush footer_atas_id">
    <template v-for="mn in menu" :key="mn.id">
      <template v-if="mn.lvl === 0">
        <li class="nav-item">
          <NuxtLink class="nav-link" aria-current="page" :to="mn.route">{{ pending ? 'Loading' : mn.nama_menu }}</NuxtLink>
        </li>
      </template>
    </template>
  </ul>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()

  const { pending, data: menu } = await useLazyAsyncData('menu', () => $fetch(config.public['apiUrl']+`menu`))
</script>
