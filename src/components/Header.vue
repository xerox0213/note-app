<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
</script>

<template>
  <header class="grid grid-rows-2 md:grid-cols-3 md:grid-rows-1 items-center p-2.5 border-b border-b-gray-200">
    <a href="/" class="justify-self-center md:justify-self-start text-xl font-bold">Notes app</a>
    <SearchBar />
  </header>
</template>

<style scoped>

</style>