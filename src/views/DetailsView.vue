<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useRepoStore } from '@/store/useRepo'
import ContentLayout from '@/layouts/ContentLayout.vue'
import CommitListRow from '@/components/CommitListRow.vue'
import useDateTime from '@/composables/datetime'

/*Declaire vars*/
const search = ref('')
let timer = undefined

// Store
const route = useRoute()
const repoStore = useRepoStore()
const { repo, repoCommits, error, loading } = storeToRefs(repoStore)

repoStore.fetchActiveRepoData(route.params.id)

// date-time hook init
const { getDate } = useDateTime()

// Functions
function editMessage(msg) {
  return msg.indexOf('\n\n') !== -1 ? msg.substring(0, msg.indexOf('\n\n')) : msg
}

function updateSeachState() {
  repoStore.$patch({
    searchVal: search.value
  })
}

function handleScroll() {
  const listEl = document.querySelector('.commits-list');

  if (listEl) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // Fetch more commits when all commits are in the viewport
      if (document.documentElement.clientHeight - listEl.getBoundingClientRect().bottom > 0
        && !repoStore.allCommitsFetched
        && search.value === ''
        && !loading.value) {
        repoStore.fetchNextCommitsPage(route.params.id)
      }
    }, 500)
  }

}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
  repoStore.resetActiveRepo()
})
</script>

<template>
  <div v-if="loading">loading...</div>
  <div v-if="error">{{ error.message }}</div>
  <ContentLayout v-if="repoCommits.length" :title="repo.name" pageClass="detail-page" :branch=true>
    <div class="commits-head">
      <h3 class="commits-head__title">All commits:</h3>
      <input v-model="search" @input="updateSeachState()" class="commits-head__search" type="text"
        placeholder="Search...">
    </div>
    <div class="commits-list">
      <CommitListRow v-for="commit in repoStore.filteredCommits" :key="commit.node_id" icon="🔀"
        :text="editMessage(commit.commit.message)"
        :meta="`${commit.commit.author.name} committed on: ${getDate(commit.commit.author.date)}`" />
      <CommitListRow v-if="!repoStore.filteredCommits.length" icon="🙅‍♀️" text="No commits found" />
      <CommitListRow v-if="loading" icon="🔄" text="Fetching more commits..." classes="text-cyan-600" />
    </div>
  </ContentLayout>
</template>
