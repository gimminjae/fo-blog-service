import { defineStore } from 'pinia'
export const useMainStore = defineStore('member', {
    state: () => ({
        member: {
            memId: '',
            nickname: '',
            createDateTime: '',
            role: ''
        }
    }),
    actions: {
        removeMember() {
            this.member = {
                memId: '',
                nickname: '',
                createDateTime: '',
                role: '',
            }
        },
        setMember(member) {
            this.member.memId = member.memId
            this.member.nickname = member.nickname
            this.member.createDateTime = member.createDateTime
            this.member.role = member.role
        },
        getMember() {
            return this.member
        }
    },
})