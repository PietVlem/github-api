<script setup>
import { storeToRefs } from 'pinia'
import { useRepoStore } from '@/store/useRepo'

// Store
const repoStore = useRepoStore()
const { repos } = storeToRefs(repoStore)

function getDate(dateString) {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}
</script>

<template>
    <div class="repo-list">
        <div v-if="repos">
            <router-link
                class="repo" v-for="(repo, index) in repos"
                :key="index" :to="{ name: 'detail', params: { id: index } }">
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