<template>
  <div>
      <div>
          <div class="d-flex justify-content-between">
              <div>
                  <h1>{{ postObject.title }}</h1>
              </div>
              <div v-if="postObject.memId === useMainStore().$id" class="d-flex gap-3">
                  <NuxtLink :to="`/post/modify/${postObject.postId}`" class="btn btn-secondary btn-lg">수정</NuxtLink>
                  <button @click="removePost(postObject.postId)" class="btn btn-outline-danger btn-lg">삭제</button>
              </div>
          </div>
          <div>
              <span class="badge text-bg-light">작성일시: {{ postObject.createDateTime }}</span>
              <span class="badge text-bg-light">최종수정: {{ postObject.updateDateTime }}</span>
          </div>
          <div>
              <!--tag-->
          </div>
      </div>
      <div id="viewer">
      </div>
<!--      <viewer :initialValue="postObject.content" height="500px"></viewer>-->
  </div>
</template>
<script setup>
import {useMainStore} from "~/store/index";
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import post from "~/composables/post";
import router from "~/composables/router";
import routes from "~/composables/route";

const postObject = ref({})
let viewer = null
// postObject.value = await post.getById(route.getParam().id)
onMounted(async () => {
    postObject.value = await post.getById(routes.getQuery().postId)
    const content = postObject.value.content
    viewer = new Viewer({
        el: document.querySelector('#viewer'),
        viewer: true,
        initialValue: content
    });
    // viewer.setMarkdown(content)
})
async function removePost(postId) {
    if (!confirm('정말로 삭제하시겠습니까?')) {
        return
    }
    await post.delete(postId)
    router.replace({ path: '/' })
}
</script>
<style scoped>

</style>