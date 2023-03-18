<script setup>
defineProps(['avater'])
</script>

<template>
    <div id="image">
        <Img :src="avater" alt="image"></Img>
    </div>
</template>

<style scoped>
#image {
    height: 200px;
    width: 200px;
}

img {
    max-width: 100%;
}
</style>
