<script setup lang="ts">
import StatItem from './StatItem.vue'
import { ref } from 'vue'

const numOfStats = 6
const numOfStatRolls = 4
const dieSides = 6
const stats = ref([8, 8, 8, 8, 8, 8])

function sum(accumulator, currentValue) {
  return accumulator + currentValue
}

function rollStats(event) {
  if (event) {
    const statsHolder = []
    for (let i = 0; i < numOfStats; i++) {
      const rolls = []
      const initialValue = 0
      for (let j = 0; j < numOfStatRolls; j++) {
        rolls.push(Math.floor(Math.random() * dieSides) + 1)
        console.log(rolls)
      }
      rolls.splice(rolls.indexOf(Math.min(...rolls)), 1)
      statsHolder.push(rolls.reduce(sum, initialValue))
      console.log(statsHolder)
    }
    stats.value = statsHolder
  }
}
</script>

<template>
  <div class="wrapper" v-if="stats">
    <div class="statBlock" v-for="(stat, index) in stats" :key="index" :value="stat">
      <fieldset v-if="index === 0">
        <StatItem statname="strength" :stat="stat" />
      </fieldset>
      <fieldset v-else-if="index === 1">
        <StatItem statname="agility" :stat="stat" />
      </fieldset>
      <fieldset v-else-if="index === 2">
        <StatItem statname="intellect" :stat="stat" />
      </fieldset>
      <fieldset v-else-if="index === 3">
        <StatItem statname="stamina" :stat="stat" />
      </fieldset>
      <fieldset v-else-if="index === 4">
        <StatItem statname="charisma" :stat="stat" />
      </fieldset>
      <fieldset v-else-if="index === 5">
        <StatItem statname="luck" :stat="stat" />
      </fieldset>
      <fieldset v-else>This shouldn't exist.</fieldset>
    </div>
  </div>
  <button @click="rollStats">Roll For Stats</button>
</template>
