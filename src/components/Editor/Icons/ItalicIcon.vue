<template>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path :fill="props.color" d="M5 19v-2.5h4l3-9H8V5h10v2.5h-3.5l-3 9H15V19z"/></svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string
}>()
</script>
