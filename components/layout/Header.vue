<template>
  <div>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div class="col-md-3 mb-2 mb-md-0">
              <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                  <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
              </a>
          </div>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
              <li><a href="#" class="nav-link px-2">Features</a></li>
              <li><a href="#" class="nav-link px-2">Pricing</a></li>
              <li><a href="#" class="nav-link px-2">FAQs</a></li>
              <li><a href="#" class="nav-link px-2">About</a></li>
          </ul>

          <div class="col-md-3 text-end d-flex gap-2">
              <NuxtLink to="/member/sign-in" type="button" class="btn btn-outline-primary">Sign-in</NuxtLink>
              <NuxtLink to="/member/sign-up" type="button" class="btn btn-primary">Sign-up</NuxtLink>
              <button @click="signOut" class="btn btn-secondary" type="button">sign-out</button>
          </div>
      </header>
  </div>
</template>
<script setup>
import cookieUtil from "~/composables/cookie";
import { useMainStore } from "~/store/index";

async function signOut() {
    cookieUtil.remove('accessToken')
    cookieUtil.remove('refreshToken')
    useMainStore.removeMember()
    router.replace({ path: '/' })
}
</script>
<style scoped>

</style>