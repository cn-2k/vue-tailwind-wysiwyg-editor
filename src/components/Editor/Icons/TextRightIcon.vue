<template>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path :fill="props.color" d="M3 5V3h18v2zm6 4V7h12v2zm-6 4v-2h18v2zm6 4v-2h12v2zm-6 4v-2h18v2z"/></svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string
}>()
</script>
