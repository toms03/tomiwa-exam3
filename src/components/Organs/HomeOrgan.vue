<script setup>
import Profile from "./ProfileSide.vue";
import RepoList from './RepoList.vue';
</script>

<template>
    <div id="general">
        <Profile />
        <RepoList />
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
