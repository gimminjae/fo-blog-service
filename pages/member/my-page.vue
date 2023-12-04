<template>
  <div>
      mypage

      loginedMember:
      {{ loginedMember }}
  </div>
</template>
<script setup>
import { ref } from "vue";
import {useMainStore} from "~/store/index";

const loginedMember = ref({})
onMounted(async () => {
    loginedMember.value = useMainStore().getMember()
})
</script>
<style scoped>
</style>