<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center pagination-sm">
      <li class="page-item" @click="$emit('previous')" v-if="currentPage > 0">
        <NuxtLink class="page-link btn ">Sebelum</NuxtLink> 
        
      </li>
      <li @click="$emit('ganti', pageNumber)" v-for="pageNumber in tot" :key="pageNumber" class="page-item" :class="{'active': currentPage == pageNumber}">
        <NuxtLink class="page-link btn">{{ pageNumber }}</NuxtLink></li>
      <li class="page-item" @click="$emit('next')" v-if="currentPage < totalPages">
        <NuxtLink class="page-link btn">Selanjutnya</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>

const props = defineProps({
  totalPages: Number,
  currentPage: Number,
})

const tot = ref(props.totalPages) 

console.log(tot)

defineEmits(['ganti','next', 'previous'])
</script>