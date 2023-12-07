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
                  <label @click="changePostView('notTmp')" class="btn btn-outline-primary" for="btnradio1">최근 글</label>

                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                  <label @click="changePostView('tmp')" class="btn btn-outline-primary" for="btnradio3">임시 글</label>
              </div>
          </div>
          <div v-if="postsViewMode === 'notTmp'" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col" v-for="post in notTmpPosts">
                  <PostCard :post="post" @load-page-info="loadPageInfoByPostCard" />
              </div>
          </div>
          <div v-if="postsViewMode === 'tmp'" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col" v-for="post in tmpPosts">
                  <PostCard :post="post" @load-page-info="loadPageInfoByPostCard" />
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
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
function loadPageInfoByPostCard(event) {
    loadPageInfo()
}
</script>
<style scoped>
</style>