<template>
  <div>
      <LayoutHeader />
      <NuxtPage class="container" />
  </div>
</template>
<script setup>
import 'vue3-toastify/dist/index.css'
import '@toast-ui/editor/dist/toastui-editor.css';
import routes from '~/composables/route'

onMounted(async () => {
    routes.alertRouteQuery()
})
</script>
<style scoped>

</style>