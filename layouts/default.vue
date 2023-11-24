<template>
  <div>
      <LayoutHeader />
      <NuxtPage class="container" />
  </div>
</template>
<script setup>
import 'vue3-toastify/dist/index.css'
import routes from '~/composables/route'

onMounted(() => {
    routes.alertRouteQuery()
})
</script>
<style scoped>

</style>