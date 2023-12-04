<template>
  <div>
      <div class="d-flex gap-3 mb-1">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">제목</span>
              </div>
              <input v-model="postObject.title" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
          </div>
          <div class="input-group">
              <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">시리즈</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
      </div>
      <div ref="editor" class="mb-2" />
      <div class="">
          <div class="btn-group" role="group" aria-label="Basic example">
              <button @click="savePost" type="button" class="btn btn-primary">저장</button>
              <button @click="saveTmpPost" type="button" class="btn btn-secondary">임시저장</button>
          </div>
      </div>
  </div>
</template>
<script setup>
import Editor from '@toast-ui/editor';
import toastAlert from "~/composables/toast";
import post from "~/composables/post"
import handleError from "~/composables/error";

const postObject = ref({
    title: '',
    content: ''
})
const editor = ref();
onMounted(() => {
    const e = new Editor({
        el: editor.value,
        height: '700px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        events: {
            change: () => postObject.value.content = e.getMarkdown()
        },
        initialValue: ''
    });
});

async function savePost() {
    isValid()
    try {
        await post.save(postObject.value)
        router.replace({ path: '/' }) // post detail 페이지로 이동
    } catch(error) {
        handleError.apiError(error)
    }
}
async function saveTmpPost() {
    isValid()
    try {
        await post.saveTmp(postObject.value)
        router.replace({ path: '/' }) // post detail 페이지로 이동
    } catch(error) {
        handleError.apiError(error)
    }
}
function isValid() {
    if (postObject.value.title.trim() === '') {
        toastAlert.warn('글 제목은 필수입니다.')
        return
    }
    if (postObject.value.content.trim() === '') {
        toastAlert.warn('글 내용을 입력하세요.')
        return
    }
}

setPageLayout('post-layout')
</script>
<style scoped>
</style>