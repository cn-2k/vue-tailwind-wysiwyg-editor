<template>
  <button :title="props.title" @click="emit('click')"
    :style="`width:${props.size ? props.size : 0}px;height:${props.size ? props.size : 0}px;`"
    class="flex items-center justify-center transition-colors rounded hover:bg-gray-200"
    :class="{ 'bg-gray-200': props.isActive?.() }"
    >
    <component :is="props.icon" class="p-1" :color="props.isActive?.() ? '#10b981' : '#595959'" />
  </button>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

const emit = defineEmits<{
  (e: 'click'): void
}>()

const props = defineProps<{
  size: string,
  icon: Component,
  title: string | undefined,
  isActive?: () => boolean | undefined
}>()
</script>
