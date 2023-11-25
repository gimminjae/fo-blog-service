<template>
  <div>
      <button @click="getMe" class="btn btn-primary btn-lg">getMe</button>
      <div>
          {{ useMainStore().member }}
      </div>
  </div>
</template>
<script setup>
import member from "~/composables/member";
import {useMainStore} from "~/store/index";

async function getMe() {
    const me = await member.getMe()
    useMainStore().setMember(me.member)
}
</script>
<style scoped>

</style>