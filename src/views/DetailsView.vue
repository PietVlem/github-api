<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useRepoStore } from '@/store/useRepo'
import { useCommitStore } from '@/store/useCommit'

const route = useRoute()

// Stores
const repoStore = useRepoStore()
const { repos } = storeToRefs(repoStore)

const commitStore = useCommitStore()
const { commits } = storeToRefs(commitStore)

onMounted(async () => {
    const id = route.params.id
    if(!repos.length) await repoStore.fetchRepos()
    await repoStore.fetchActiveRepo(id)
    await commitStore.fetchCommits()
    console.log(commits)
})


</script>

<template>
  <div class="about">
    <h1>This is an details page: </h1>
  </div>
</template>
