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
            <!--      <div class="mb-3">-->
            <!--          <span v-if="signUpDto.password1 !== signUpDto.password2" class="form-text">{{ errorMessages.notSamePassword }}</span>-->
            <!--          <br>-->
            <!--          <span v-if="!memberInfoIsValid.password" class="form-text">{{ errorMessages.password }}</span>-->
            <!--      </div>-->
            <div class="d-flex">
                <button class="btn btn-primary" type="button" @click="signIn(loginDto)">로그인</button>
                <NuxtLink to="/member/sign-up" class="btn btn-primary" type="button">회원가입</NuxtLink>
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