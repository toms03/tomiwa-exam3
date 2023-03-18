<script setup>
import Card from '../Molecules/CardComponent.vue'
defineProps(['data'])
</script>

<template>
  <div v-if="data">
    <div v-for="item in data" :key="item.id">
      <Card
        :title="item.name"
        :language="item.language || 'Undetermined'"
        :privateRepo="item.private"
        :details="item.description || 'No Description'"
        :link="{ text: 'Open Repo', link: item.html_url }"
      />
    </div>
  </div>
</template>

<style scoped>
div {
    height: 100%;
    width: 100%;
}
</style>
