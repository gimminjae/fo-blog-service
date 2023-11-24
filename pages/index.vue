<template>
  <div>
      <button @click="getMe" class="btn btn-primary btn-lg">getMe</button>
      <div>
          {{ loginedMember }}
      </div>
  </div>
</template>
<script setup>
import member from "~/composables/member";
import {ref} from 'vue'

const loginedMember = ref({})
async function getMe() {
    const me = await member.getMe()
    console.log(me)
    loginedMember.value = me
}
</script>
<style scoped>

</style>