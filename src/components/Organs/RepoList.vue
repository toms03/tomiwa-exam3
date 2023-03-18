<script setup>
import Card from '../Molecules/CardComponent.vue'
import Title from "../atoms/TitleComponent.vue";

import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()
const data = computed(() => store.state.repos)

store.dispatch('loadRepos')
</script>

<template>
  <div v-if="data">
    <Title text="My Repositories" />
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
    color: blueviolet;
    height: 100%;
    width: 100%;
}
</style>
