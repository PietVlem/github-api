<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/store/useProfile'
import SiteLayout from '@/layouts/SiteLayout.vue'

// Define stores
const profileStore = useProfileStore()

// Define data stores
const { profile } = storeToRefs(profileStore)

onMounted(() => {
  // Get data
  profileStore.fetchProfile()
}) 
</script>

<template>
  <SiteLayout>
    <div v-if="profile" class="profile col-span-main">
      <img class="profile__image" :src="profile.avatar_url" alt="avatar">
      <div class="profile__bio">
        <h2>{{ profile.login }}</h2>
        <p>{{ profile.bio }}</p>
      </div>
    </div>

    <div class="page-content">
      <router-view />
    </div>
  </SiteLayout>
</template>