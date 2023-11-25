<template>
  <div>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div class="col-md-3 mb-2 mb-md-0">
              <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                  <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
              </a>
          </div>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><NuxtLink to="/" class="nav-link px-2 link-secondary">Home</NuxtLink></li>
              <li><NuxtLink to="/post" class="nav-link px-2">Write</NuxtLink></li>
              <li><NuxtLink to="/member/${}" class="nav-link px-2">My Page</NuxtLink></li>
              <li><a href="#" class="nav-link px-2">About</a></li>
          </ul>

          <div class="col-md-3 text-end d-flex gap-2">
              <NuxtLink v-if="!store.member.memId" to="/member/sign-in" type="button" class="btn btn-outline-primary">Sign-in</NuxtLink>
              <NuxtLink v-if="!store.member.memId" to="/member/sign-up" type="button" class="btn btn-primary">Sign-up</NuxtLink>
              <button v-if="store.member.memId" @click="signOut" class="btn btn-secondary" type="button">sign-out</button>
          </div>
      </header>
  </div>
</template>
<script setup>
import cookieUtil from "~/composables/cookie";
import { useMainStore } from "~/store/index";

const store = useMainStore()
async function signOut() {
    cookieUtil.remove('accessToken')
    cookieUtil.remove('refreshToken')
    useMainStore.removeMember()
    router.replace({ path: '/' })
}
</script>
<style scoped>

</style>