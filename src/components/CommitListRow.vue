<script setup>
import { defineProps } from 'vue'

const props = defineProps(['icon', 'text', 'classes', 'meta'])
</script>

<template>
    <div :class="`commit ${classes}`">
        <span>{{ props.icon }}</span>
        <div class="commit__info">
            <p>{{ props.text }}</p>
            <div v-if="meta" class="meta">
                <span>{{ meta }}</span>
            </div>
        </div>
    </div>
</template>