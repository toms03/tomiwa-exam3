<script setup>
import { onMounted, ref } from 'vue';
import axios from "axios";
import Profile from "./ProfileSide.vue";
import RepoList from './RepoList.vue';

const data = ref(null);
const profileOwner = ref(null);

onMounted(() => {
    axios
        .get('https://api.github.com/users/toms03/repos')
        .then(response => 
            data.value = response.data
        )
    axios
        .get('https://api.github.com/users/toms03')
        .then(response => 
            profileOwner.value = response.data
        )
});
</script>

<template>
    <div id="general">
        <Profile :data="profileOwner" />
        <RepoList :data="data" />
    </div>
</template>

<style scoped>
#general {
    display: flex;
    background-color: white;
    width: 80%;
    margin: auto;
}
</style>
