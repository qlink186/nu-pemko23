<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center pagination-sm">
      <li class="page-item" @click="$emit('previous')" v-if="currentPage > 1">
        <NuxtLink class="page-link btn "><span>&laquo;</span></NuxtLink> 
        
      </li>
      <li @click="$emit('refetch', pageNumber)" v-for="pageNumber in dtdown.totalPages" :key="pageNumber" class="page-item" :class="{'active': currentPage == pageNumber}">
        <NuxtLink class="page-link btn">{{ pageNumber }}</NuxtLink></li>
      <li class="page-item" @click="$emit('next')" v-if="currentPage < tot">
        <NuxtLink class="page-link btn"><span>&raquo;</span></NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>

const props = defineProps({
  totalPages: Number,
  currentPage: Number,
})
const {dtdown} = await useDownloadAreaData()


const tot = toRef(props.totalPages) 
const currentPage = toRef(props.currentPage)

defineEmits(['refetch','next', 'previous'])
</script>