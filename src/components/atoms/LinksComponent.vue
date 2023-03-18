<script setup>
defineProps({text: String, url: String})
</script>
<template>
    <a :href="url">{{ text }}</a>
</template>
<style scoped>
a {
    margin: 25px;
    cursor: pointer;
}
</style>