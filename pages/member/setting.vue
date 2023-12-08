<template>
  <div>
      <div class="text-center">
          <img class="rounded-circle" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
          <div>
              {{ loginedMember }}
              <h1>{{ loginedMember.nickname }}</h1>
              <h4>Since {{ loginedMember.createDateTime }}</h4>
          </div>
      </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const loginedMember = ref({})
onMounted(async () => {
    loadPageInfo()
})
async function loadPageInfo() {
    loginedMember.value = (await member.getMe()).member
}
</script>