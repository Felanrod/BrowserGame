<script setup lang="ts">
import BrowserGameHeader from './components/BrowserGameHeader.vue'
import SomeStats from './components/SomeStats.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <BrowserGameHeader msg="Vue Browser Game" />
    </div>
  </header>
  <main>
    <div class="wrapper">
      <SomeStats />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
