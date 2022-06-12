<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRepoStore } from '@/store/useRepo'
import useDateTime from '@/hooks/datetime'

// Store
const repoStore = useRepoStore()
const { repos, error, loading } = storeToRefs(repoStore)

// date-time hook init
const { getDate } = useDateTime()

onMounted(() => {
    //Get Data
    if(!repos.length) repoStore.fetchRepos()
}) 
</script>

<template>
    <div class="repo-list">
        <div v-if="loading">loading...</div>
        <div v-if="error">{{ error.message }}</div>
        <div v-if="repos">
            <div class="actions">
                <div class="actions__filters">
                    <p>Sort on:</p>
                    <button @click="repoStore.sortReposAsc" class="button">⬆️ Name asc</button>
                    <button @click="repoStore.sortReposDesc" class="button">⬇️ Name desc</button>
                </div>
                <div class="button-wrapper">
                    <button @click="repoStore.fetchRepos" class="button">🔄 Fetch Repos</button>
                </div>
            </div>
            <router-link class="repo" v-for="repo in repos" :key="repo.id"
                :to="{ name: 'detail', params: { id: repo.name } }">
                <div class="repo__info">
                    <span class="folder-icon">🗂</span>
                    <p class="folder-name">{{ repo.name }}</p>
                    <div v-if="repo.language" class="folder-tags">
                        <span class="tag">{{ repo.language }}</span>
                    </div>
                    <span class="folder-updated">Last updated: {{ getDate(repo.updated_at) }}</span>
                </div>
                <span>👉</span>
            </router-link>
        </div>
    </div>
</template>