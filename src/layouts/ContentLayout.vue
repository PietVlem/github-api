<script setup>
import { defineProps } from 'vue'
const props = defineProps(['title', 'pageClass'])
</script>

<template>
    <div class="content-layout" :class="props.pageClass">
        <h2 class="content-layout__title">{{ props.title }}</h2>
        <slot></slot>
    </div>
</template>