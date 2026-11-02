<script setup lang="ts">
import { ref } from 'vue'
import { Character } from './Character.ts'
import CharObjStats from './CharObjStats.vue'

defineProps({
  charName: { type: String, required: true },
  charClass: { type: String, required: true },
  charLevel: { type: Number, required: true },
  charExp: { type: Array, required: true },
  charStats: { type: Object, required: true, default: () => ({}) },
  isItTrue: { type: Boolean, required: true },
  increaseExp: { type: Function, required: true },
  theCharacter: { type: Character, required: true },
})

const expAmount = ref(0)
// defineProps<{
//   charName: string
//   charClass: string
//   charLevel: number
//   charExp: number[]
//   charStats: Record<string, number>
//   isItTrue: boolean
// }>()
</script>

<template>
  <div :id="charName" class="character">
    <h3>{{ charName }}</h3>
    <h4>{{ charClass }} - Level {{ charLevel }}</h4>
    <div class="exp-container">
      <div
        class="exp-bar"
        :style="{
          width: `${Math.floor(((charExp[0] as number) / (charExp[1] as number)) * 100)}%`,
        }"
      >
        {{ charExp[0] }} / {{ charExp[1] }}
      </div>
    </div>
    <CharObjStats :char-stats="charStats" />
    <h4 v-if="isItTrue">It's very true.</h4>
    <h4 v-else>It's not true.</h4>
    <input v-model="expAmount" type="number" id="expAmount" />
    <button @click="increaseExp(expAmount)">Add Exp</button>
  </div>
</template>

<style scoped>
.exp-container {
  width: 100%;
  height: 24px;
  background-color: #b3b1b1;
  border-radius: 12px;
  overflow: hidden;
}
.exp-bar {
  height: 100%;
  background-color: #3f3ccf;
  text-align: center;
  color: white;
  line-height: 24px;
  font-size: 12px;
  transition: width 1s ease;
}
</style>
