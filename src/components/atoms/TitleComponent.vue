<script setup>
defineProps({text: String})
</script>
<template>
    <div><H2>{{ text }}</H2></div>
</template>
<style scoped>
h2 {
    margin: 25px;
    font-size: 30px;
}
</style>