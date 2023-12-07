<template>
  <div>
      <div class="text-center">
          <img class="rounded-circle" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
          <div>
              <h1>{{ loginedMember.nickname }}</h1>
              <h4>Since {{ loginedMember.createDateTime }}</h4>
          </div>
      </div>
      <hr>
      <div>
          <div class="text-center mb-3">
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                  <label @click="changePostView('notTmp')" class="btn btn-outline-primary" for="btnradio1">글</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                  <label @click="changePostView('tmp')" class="btn btn-outline-primary" for="btnradio3">임시 글</label>
              </div>
          </div>
          <div v-if="postsViewMode === 'notTmp'" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col" v-for="post in notTmpPosts">
                  <div class="card shadow-sm">
                      <svg @click="router.push({ path: `/post/detail/${post.postId}` })" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>
                      <div class="card-body">
                          <NuxtLink :to="`/post/detail/${post.postId}`"><p class="card-text">{{ post.title }}</p></NuxtLink>
                          <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                  <button type="button" class="btn btn-sm btn-outline-secondary">수정</button>
                                  <button @click="removePost(post.postId)" type="button" class="btn btn-sm btn-outline-secondary">삭제</button>
                              </div>
                              <div>
                                  <div><span class="badge rounded-pill text-bg-light">{{ post.createDateTime }}</span></div>
                                  <div><span class="badge rounded-pill text-bg-light">{{ post.updateDateTime }}</span></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div v-if="postsViewMode === 'tmp'" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col" v-for="post in tmpPosts">
                  <div class="card shadow-sm">
                      <svg @click="router.push({ path: `/post/detail/${post.postId}` })" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>
                      <div class="card-body">
                          <NuxtLink :to="`/post/detail/${post.postId}`"><p class="card-text">{{ post.title }}</p></NuxtLink>
                          <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                  <button type="button" class="btn btn-sm btn-outline-secondary">수정</button>
                                  <button @click="removePost(post.postId)" type="button" class="btn btn-sm btn-outline-secondary">삭제</button>
                              </div>
                              <div>
                                  <div class="text-body-secondary">{{ post.createDateTime }}</div>
                                  <div class="text-body-secondary">{{ post.updateDateTime }}</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {useMainStore} from "~/store/index";
import post from "~/composables/post"

const postsViewMode = ref("notTmp")

const notTmpPosts = ref([])
const tmpPosts = ref([])
const loginedMember = ref({})
onMounted(async () => {
    loadPageInfo()
})
async function loadPageInfo() {
    loginedMember.value = (await member.getMe()).member
    const postsData = await post.getByMember(loginedMember.value.nickname)
    notTmpPosts.value = postsData.notTmp
    tmpPosts.value = postsData.tmp
}
function changePostView(mode) {
    postsViewMode.value = mode
}
async function removePost(postId) {
    if (!confirm('정말로 삭제하시겠습니까?')) {
        return
    }
    await post.delete(postId)
    loadPageInfo()
}
</script>
<style scoped>
</style>