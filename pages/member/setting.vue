<template>
  <div>
      <div class="text-center">
          <img class="rounded-circle" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
          <div class="d-grid gap-2 col-3 mx-auto">
              <button class="btn btn-outline-secondary mt-3" type="button">이미지 변경</button>
          </div>
          <div class="mb-3">
              <label for="formFile" class="form-label">Default file input example</label>
              <input @change="inputFile" class="form-control" type="file" id="formFile">
          </div>
          <div>
              {{ loginedMember }}
              <h1>{{ loginedMember.nickname }}</h1>
              <h4>Since {{ loginedMember.createDateTime }}</h4>
          </div>
      </div>
      <div v-if="imageUploadYn" class="modal" tabindex="-1">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">Modal title</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <p>Modal body text goes here.</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

const imageUploadYn = ref(false)
const loginedMember = ref({})
onMounted(async () => {
    loadPageInfo()
})
async function loadPageInfo() {
    loginedMember.value = (await member.getMe()).member
}
function inputFile() {

}
</script>