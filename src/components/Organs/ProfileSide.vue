<script setup>
import TitleComponent from "../atoms/TitleComponent.vue";
import ProfileImage from "../Molecules/ProfileImage.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()
const data = computed(() => store.state.owner)

store.dispatch('getOwner')

</script>

<template>
    <div id="profile">
        <ProfileImage :avater="data?.avatar_url" />
        <TitleComponent :text="(data ? `@${data.login}` : null)" />
        <TitleComponent :text="data?.name" />
        <TitleComponent :text="data?.company || 'No Company'" />
    </div>
</template>

<style scoped>
#profile {
    background: transparent center / cover no-repeat url('../../assets/background.jpeg');
    width: 30%;
    padding: 150px 30px 50px 30px;
}
</style>