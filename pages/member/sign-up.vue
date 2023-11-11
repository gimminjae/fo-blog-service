<template>
    <div>
        <input type="text" @v-model="signUpDto.username">
        <input type="text" @v-model="signUpDto.nickname">
        <input type="text" @v-model="signUpDto.password1">
        <input type="text" @v-model="signUpDto.password2">
        <button @click="signUp(signUpDto)">회원가입</button>
    </div>
</template>
<script setup>
import { api } from '~/core/api/api'

const signUpDto = ref({
    username: "",
    nickname: "",
    password1: "",
    password2: ""
})
function signUp(signUpDto) {
    const result = api.post("/api/member", signUpDto)
    console.log(result)
}
</script>
<style scoped>
</style>