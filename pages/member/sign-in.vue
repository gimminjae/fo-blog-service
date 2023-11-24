<template>
    <div>
        <div class="mx-auto my-auto" style="width: 40%; height: 40%;">
            <div class="mb-3">
                <label class="form-label">아이디</label>
                <input v-model="loginDto.username" type="password" class="form-control" id="username">
            </div>
            <div class="mb-3">
                <label class="form-label">비밀번호</label>
                <input v-model="loginDto.password" type="password" class="form-control" id="password">
            </div>
            <div class="d-flex gap-2 justify-content-center">
                <button @click="signIn(loginDto)" class="btn btn-primary btn-block d-inline-flex align-items-center" type="button">
                    로그인
                </button>
                <NuxtLink to="/member/sign-up" class="btn btn-outline-secondary btn-block d-inline-flex align-items-center" type="button">
                    회원가입
                </NuxtLink>
            </div>
            {{ loginDto }}
        </div>
    </div>
</template>
<script setup>
const loginDto = ref({
    username: '',
    password: ''
})
function signIn(loginDto) {
    console.log(loginDto)
}
</script>
<style scoped>

</style>