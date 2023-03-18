<script setup>
defineProps({text: String})
</script>
<template>
    <Div><H2>{{ text }}</H2></Div>
</template>
<style scoped>
h2 {
    margin: 25px;
    font-size: 30px;
}
</style>