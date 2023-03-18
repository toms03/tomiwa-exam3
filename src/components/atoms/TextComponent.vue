<script setup>
defineProps({text: String})
</script>
<template>
    <span>{{ text }}</span>
</template>

<style scoped>
span {
    margin: 25px;
}
</style>