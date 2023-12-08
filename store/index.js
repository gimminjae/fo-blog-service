import { defineStore } from 'pinia'
export const useMainStore = defineStore('member', {
    state: () => ({
        member: {
            memId: '',
            nickname: '',
            createDateTime: '',
            role: '',
            memType: ''
        }
    }),
    actions: {
        removeMember() {
            this.member = {
                memId: '',
                nickname: '',
                createDateTime: '',
                role: '',
                memType: ''
            }
        },
        setMember(member) {
            this.member.memId = member.memId
            this.member.nickname = member.nickname
            this.member.createDateTime = member.createDateTime
            this.member.role = member.role
            this.member.memType = member.memType
        },
        getMember() {
            return this.member
        }
    },
})