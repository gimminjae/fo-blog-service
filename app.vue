<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script setup>
import member from "~/composables/member"
import {useMainStore} from "~/store/index";

onMounted(async () => {
    const result = await member.getMe()
    useMainStore().setMember(result.member)
})
</script>
<style scoped>

</style>