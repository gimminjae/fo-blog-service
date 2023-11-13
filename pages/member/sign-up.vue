<template>
    <div>
        <div class="mx-auto my-auto" style="width: 40%; height: 40%;">
            <div class="mb-3">
                <label for="exampleInputUsername" class="form-label">아이디</label>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <input v-model="signUpDto.username" type="text" id="inputPassword6" class="form-control"
                               aria-describedby="passwordHelpInline">
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-secondary">중복확인</button>
                    </div>
                    <div class="col-auto">
                        <span id="passwordHelpInline" class="form-text">
                            Must be 8-20 characters long.
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputNickname" class="form-label">닉네임</label>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <input v-model="signUpDto.nickname" type="text" id="inputPassword6" class="form-control"
                               aria-describedby="passwordHelpInline">
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-secondary">중복확인</button>
                    </div>
                    <div class="col-auto">
                        <span id="passwordHelpInline" class="form-text">
                            Must be 8-20 characters long.
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">비밀번호</label>
                <input v-model="signUpDto.password1" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword2" class="form-label">비밀번호 확인</label>
                <input v-model="signUpDto.password2" type="password" class="form-control" id="exampleInputPassword1">
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
    } catch(error) {
        handleError.apiError(error)
    }
}
</script>
<style scoped>
</style>