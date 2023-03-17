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
        .then(response => {
            profileOwner.value = response.data[0].owner
            data.value = response.data
        });
});
</script>

<template>
    <Profile :data="profileOwner" />
    <RepoList :data="data" />
</template>
