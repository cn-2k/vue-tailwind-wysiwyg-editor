<template>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path :fill="props.color" d="M5 17V7h2v4h4V7h2v10h-2v-4H7v4zm12 0V9h-2V7h4v10z"/></svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string
}>()
</script>
