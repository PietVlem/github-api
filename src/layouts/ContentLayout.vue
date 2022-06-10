<script setup>
import { defineProps } from 'vue'
const props = defineProps(['title', 'pageClass', 'branch'])
</script>

<template>
    <div class="content-layout" :class="props.pageClass">
        <div class="content-layout__breadcrumb">
            <router-link :to="'/'">🗂 Repositories</router-link>
            <span v-if="branch">></span>
            <span v-if="branch">🗂 {{ title }}</span>
        </div>
        <h2 class="content-layout__title">{{ props.title }}</h2>
        <slot></slot>
    </div>
</template>