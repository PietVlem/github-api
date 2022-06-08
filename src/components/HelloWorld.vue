<template>
  <div class="hello">
    <h1>{{ prop.msg }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const prop = defineProps(['msg'])

</script>