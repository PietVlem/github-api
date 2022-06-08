<script setup>
import { defineProps, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useGithubApiStore } from '../store/useGithubApi'

// Props
const prop = defineProps(['msg'])

// Store
const main = useGithubApiStore()
const { posts } = storeToRefs(main)

onMounted(() => {
  main.getPosts()
}) 

</script>

<template>
  <div class="hello">
    <h1 class="font-bold text-xl mb-6">{{ prop.msg }}</h1>
    <div v-for="(post, index) in posts" :key="index" class="mb-4">
      <h2 class="font-bold text-lg">{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>