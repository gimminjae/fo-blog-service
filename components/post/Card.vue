<template>
  <div>
      <div class="card shadow-sm">
          <svg @click="router.push({ path: `/post/detail`, query: { postId: post.postId } })" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>
          <div class="card-body">
              <NuxtLink :to="{ path: `/post/detail`, query: { postId: post.postId } }"><p class="card-text">{{ post.title }}</p></NuxtLink>
              <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                      <button @click="router.push({ path: '/post/modify', query: { postId: post.postId }})" type="button" class="btn btn-sm btn-outline-secondary">수정</button>
                      <button @click="removePost(post.postId)" type="button" class="btn btn-sm btn-outline-secondary">삭제</button>
                  </div>
                  <div>
                      <div><span class="badge rounded-pill text-bg-light">작성: {{ post.createDateTime }}</span></div>
                      <div><span class="badge rounded-pill text-bg-light">수정: {{ post.updateDateTime }}</span></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import router from "~/composables/router"

const props = defineProps({
    post: {
        default: []
    }
})
const emits = defineEmits(['loadPageInfo'])
async function removePost(postId) {
    if (!confirm('정말로 삭제하시겠습니까?')) {
        return
    }
    await post.delete(postId)
    emits('loadPageInfo')
}
</script>