<template>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path :fill="props.color" d="M5.55 19L2 15.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zm0-8L2 7.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zM13 17v-2h9v2zm0-8V7h9v2z"/></svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string
}>()
</script>
