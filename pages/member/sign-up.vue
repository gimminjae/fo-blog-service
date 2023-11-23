<template>
    <div>
        <div class="mx-auto my-auto" style="width: 40%; height: 40%;">
            <div class="mb-3">
                <label class="form-label">아이디</label>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <input @input="confirmUsername" v-model="signUpDto.username" type="text" id="username" class="form-control">
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-secondary">중복확인</button>
                    </div>
                    <div v-if="!memberInfoIsValid.username">
                        <span class="form-text">{{ errorMessages.username }}</span>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">닉네임</label>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <input @input="confirmNickname" v-model="signUpDto.nickname" type="text" id="nickname" class="form-control">
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-secondary">중복확인</button>
                    </div>
                    <div v-if="!memberInfoIsValid.nickname">
                        <span class="form-text">{{ errorMessages.nickname }}</span>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label class="form-label">비밀번호</label>
                <input @input="confirmPassword" v-model="signUpDto.password1" type="password" class="form-control" id="password1">
            </div>
            <div class="mb-3">
                <label class="form-label">비밀번호 확인</label>
                <input v-model="signUpDto.password2" type="password" class="form-control" id="password2">
            </div>
            <div class="mb-3">
                <span v-if="signUpDto.password1 !== signUpDto.password2" class="form-text">{{ errorMessages.notSamePassword }}</span>
                <br>
                <span v-if="!memberInfoIsValid.password" class="form-text">{{ errorMessages.password }}</span>
            </div>
            <div class="d-grid">
                <button class="btn btn-primary" type="button" @click="signUp(signUpDto)">회원가입</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import member from '~/composables/member'
import handleError from '~/composables/error'
import toastAlert from '~/composables/toast'

const signUpDto = ref({
    username: '',
    nickname: '',
    password1: '',
    password2: '',
    memType: 'COMMON'
})
const memberInfoIsValid = ref({
    username: true,
    nickname: true,
    password: true,
})
const errorMessages = {
    username: '아이디는 5 ~16자 이어야 합니다.',
    nickname: '닉네임은 특수문자를 제외한 2~10자리여야 합니다.',
    password: '비밀번호는 영문, 숫자, 특수문자를 적어도 하나 이상 포함하는 5~16자의 문자열입니다.',
    notSamePassword: '두 개의 비밀번호가 일치하지 않습니다.'
}
const nicknameRegex = new RegExp('^[A-Za-z0-9가-힣]{2,10}$')
const passwordRegex = new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@#$%^&+=!]).{5,16}$')

function confirmUsername() {
    memberInfoIsValid.value.username = signUpDto.value.username.trim().length >= 5 && signUpDto.value.username.trim().length <= 16
}
function confirmNickname() {
    memberInfoIsValid.value.nickname = nicknameRegex.test(signUpDto.value.nickname)
}
function confirmPassword() {
    memberInfoIsValid.value.password = passwordRegex.test(signUpDto.value.password1)
}
async function signUp(signUpDto) {
    try {
        await member.signUp(signUpDto)
        const query = {
            message: '회원가입이 완료되었습니다.',
            type: 'success',
        }
        router.replace({
            path: '/',
            query: query
        })
    } catch (error) {
        handleError.apiError(error)
    }
}
</script>
<style scoped>
</style>