<script setup lang="ts">

import NoteCard from "./NoteCard.vue";
import {useNote} from "../store/note-store.ts";

const noteStore = useNote()
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
    <NoteCard v-for="note in noteStore.notes" :note="note"/>
  </div>
</template>

<style scoped>

</style>