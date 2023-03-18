<script setup>
import router from "../../router";
import Title from '../atoms/TitleComponent.vue'
import Text from '../atoms/TextComponent.vue'
import Link from '../atoms/LinksComponent.vue'

defineProps({
  title: String,
  privateRepo: Boolean,
  language: String,
  details: String,
  link: { text: String, url: String }
})

const clickMethod = (id)=>{
    router.push({ name: 'repo', params: { repoId: id } })
}
</script>
<template>
  <div id="card" @click="clickMethod(title)">
    <Title :text="title" />
    <div>
      <Text :text="language" />
      <Link :text="link.text" :url="link.url" />
      <Text :text="privateRepo ? 'Private Repo' : 'Public Repo'" />
    </div>
    <Text :text="details" />
  </div>
</template>
<style scoped>
#card {
  margin: 20px auto;
  width: 80%;
  background-color: whitesmoke;
  border: solid 1px slateblue;
  color: black;
  border-radius: 5px;
  cursor: pointer;
}
h2 {
  margin: 25px;
  font-size: 30px;
}
</style>
