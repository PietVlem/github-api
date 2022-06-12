<script setup>
import { defineProps } from 'vue'

defineProps({
  icon: String,
  text: String,
  classes: String,
  meta: String
})
</script>

<template>
    <div :class="`commit ${classes}`">
        <span v-if="icon">{{ icon }}</span>
        <div class="commit__info">
            <p v-if="text">{{ text }}</p>
            <div v-if="meta" class="meta">
                <span>{{ meta }}</span>
            </div>
        </div>
    </div>
</template>