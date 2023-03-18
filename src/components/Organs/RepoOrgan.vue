<script setup>
import ProfileImage from '../Molecules/ProfileImage.vue'
import Title from '../atoms/TitleComponent.vue'
import Contributors from '../icons/PeopleGroup.vue'
import Fork from '../icons/ForkIcon.vue'
import Issues from '../icons/IssuesIcon.vue'
import Star from '../icons/StarsIcon.vue'
import GitHub from '../icons/GitHubIcon.vue'
import Text from '../atoms/TextComponent.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()

const repoId = route.params.repoId

const store = useStore()
const data = computed(() => {
  const fetched = store.getters.getByID(repoId)
  if (fetched){
    console.log(fetched)
    return fetched
  }else{
    router.replace({name: "NotFound"})
    return null
  }
});

store.dispatch('loadRepos')
</script>
<template>
  <div id="parent">
    <div style="width: 100%;">
      <Title :text="data?.name" />
      <Text :text="data?.description || 'No description'" />
      <div id="logos">
        <a :href="data?.contributors"><Contributors />Contributors</a>
        <span><Fork />{{ data?.forks }} Forks</span>
        <span><Issues />{{ data?.open_issues }} Issues</span>
        <span><Star />{{ data?.watchers }} Stars</span>
      </div>
    </div>
    <div>
      <ProfileImage :avater="data?.owner.avatar_url" />
      <a :href="data?.html_url"><GitHub /></a>
    </div>
  </div>
</template>
<style scoped>
#parent {
  display: flex;
  background-color: white;
  width: 80%;
  margin: auto;
  color: darkblue;
  justify-content: space-between;
  border-radius: 7px;
}
svg {
  width: 20px;
}

#logos {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
}
</style>
