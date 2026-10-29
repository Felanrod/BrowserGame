<script setup lang="ts">
import { ref } from 'vue'
import CharObj from './CharObj.vue'
import { Character } from './Character.ts'

let characterCount: number = 0
const maxNumCharacters: number = 4
const characters = ref<Character[]>([])

function createRandChar(event: Event) {
  if (event) {
    if (characterCount < maxNumCharacters) {
      const charName: string = `Character${characterCount}`
      //const charStats: Record<string, number> = rollStats()
      //const charTrue = isItTrulyTrue()
      // const character = ref<Character>(new Character(charName))
      const character = new Character(charName)
      //const character : Character = ref({})
      characters.value.push(character)
      characterCount++
    } else {
      console.log('Cannot create more characters.')
    }
  }
}
</script>

<template>
  <div v-if="characters">
    <CharObj
      v-for="character in characters"
      :key="character.charName"
      :char-name="character.charName"
      :char-stats="character.charStats"
      :is-it-true="character.isItTrue"
    />

    <button v-if="!characters || characters.length < maxNumCharacters" @click="createRandChar">
      Create a character
    </button>
  </div>
</template>
