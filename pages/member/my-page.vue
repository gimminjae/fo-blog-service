<template>
  <div>
      mypage

      loginedMember:
      {{ loginedMember }}
      <hr>
      posts:
      {{ posts }}
  </div>
</template>
<script setup>
import { ref } from "vue";
import {useMainStore} from "~/store/index";
import post from "~/composables/post"

const posts = ref([])
const loginedMember = ref({})
onMounted(async () => {
    loginedMember.value = useMainStore().getMember()
    posts.value = await post.getByMember(loginedMember.value.nickname)
})
</script>
<style scoped>
</style>