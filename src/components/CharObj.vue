<script setup lang="ts">
import CharObjStats from './CharObjStats.vue'

defineProps<{
  charName: string
  charStats: Record<string, number>
  isItTrue: boolean
}>()
</script>

<template>
  <div :id="charName" class="character">
    <h3>{{ charName }}</h3>
    <CharObjStats :char-stats="charStats" />
    <h4 v-if="isItTrue">It's very true.</h4>
    <h4 v-else>It's not true.</h4>
  </div>
</template>
