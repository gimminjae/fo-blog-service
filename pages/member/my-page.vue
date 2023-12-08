<template>
  <div>
      <div class="text-center">
          <img @click="changeImageUploadYn" class="rounded-circle img-thumbnail" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" />
          <img @click="changeImageUploadYn" class="rounded-circle img-thumbnail object-cover" style="width: 250px; height: 250px" alt="avatar1" :src="inputImage" />
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
<!--      <div v-if="imageUploadYn" class="position-absolute top-50 start-50 translate-middle z-100 bg-white px-10">-->
<!--          <div class="modal-dialog">-->
<!--              <div class="modal-content">-->
<!--                  <div class="modal-header">-->
<!--                      <h5 class="modal-title">이미지 변경</h5>-->
<!--                      <button @click="changeImageUploadYn" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
<!--                  </div>-->
<!--                  <div class="modal-body">-->
<!--                      <div class="mb-3">-->
<!--                          <input class="form-control" type="file" id="formFile">-->
<!--                      </div>-->
<!--                  </div>-->
<!--                  <div class="modal-footer">-->
<!--                      <button type="button" class="btn btn-primary">Save changes</button>-->
<!--                  </div>-->
<!--              </div>-->
<!--          </div>-->
<!--      </div>-->
      <div v-if="imageUploadYn" class="modal modal-sheet position-absolute top-50 start-50 translate-middle d-block p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet"> <!-- bg-body-secondary -->
          <div class="modal-dialog" role="document">
              <div class="modal-content rounded-4 shadow">
                  <div class="modal-header border-bottom-0">
                      <h1 class="modal-title fs-5">이미지 변경</h1>
                      <button @click="changeImageUploadYn" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="mb-3 mx-3">
                      <input @change="inputFile($event.target.files)" class="form-control" type="file" id="formFile">
                  </div>
                  <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                      <button type="button" class="btn btn-lg btn-primary">Save changes</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import post from "~/composables/post"

const imageUploadYn = ref(false)

const inputImage = ref('')
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
function changeImageUploadYn() {
    imageUploadYn.value = !imageUploadYn.value
}
async function inputFile(files) {
    console.log(files)
    inputImage.value = await base64(files[0])
}
function base64(file) {
    // 비동기적으로 동작하기 위하여 promise를 return 해준다.
    return new Promise(resolve => {
        // 업로드된 파일을 읽기 위한 FileReader() 객체 생성
        let a = new FileReader()
        // 읽기 동작이 성공적으로 완료됐을 때 발생
        a.onload = e => {
            resolve(e.target.result)
            // 썸네일을 보여주고자 하는 <img>에 id값을 가져와 src에 결과값을 넣어준다.
            const previewImage = document.getElementById('preview')
            previewImage.src = e.target.result
        }
        // file 데이터를 base64로 인코딩한 문자열. 이 문자열을 브라우저가 인식하여 원래 데이터로 만들어준다.
        a.readAsDataURL(file)
    })
}
</script>
<style scoped>
</style>