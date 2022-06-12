<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  pageClass: String,
  branch: Boolean,
})
</script>

<template>
    <div class="content-layout" :class="pageClass">
        <div class="content-layout__breadcrumb">
            <router-link :to="'/'">🗂 Repositories</router-link>
            <span v-if="branch">></span>
            <span v-if="branch">🗂 {{ title }}</span>
        </div>
        <h2 class="content-layout__title">{{ title }}</h2>
        <slot></slot>
    </div>
</template>