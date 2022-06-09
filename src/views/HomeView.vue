<script setup>
import ContentLayout from '@/layouts/ContentLayout.vue';
import RepoList from '@/components/RepoList.vue'
</script>

<template>
  <ContentLayout title="Repositories" pageClass="home">
    <RepoList />
  </ContentLayout>
</template>
