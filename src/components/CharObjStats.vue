<script setup lang="ts">
import StatItem from './StatItem.vue'

defineProps<{
  charStats: Record<string, number>
}>()
</script>

<template>
  <StatItem
    v-for="(statNum, statName) in charStats"
    :key="statName"
    :stat-name="statName"
    :stat-num="statNum"
  />
</template>
