export const state = () => ({
    member: {
        memId: '',
        nickname: '',
        createDateTime: '',
        role: '',
    }
})
export const mutations = {
    removeMember() {
        state.member = {
            memId: '',
            nickname: '',
            createDateTime: '',
            role: '',
        }
    },
    setMember(member) {
        state.member.memId = member.memId
        state.member.nickname = member.nickname
        state.member.createDateTime = member.createDateTime
        state.member.role = member.role
    }
}