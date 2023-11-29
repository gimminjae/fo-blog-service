<template>
  <div>
      mypage

      loginedMember:
      {{ loginedMember }}
  </div>
</template>
<script setup>
import { ref } from "vue";
import member from "~/composables/member";

const loginedMember = ref({})
onMounted(async () => {
    loginedMember.value = await member.getMe().member
})
</script>
<style scoped>
</style>