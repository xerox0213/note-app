<script setup lang="ts">

import NoteCard from "./NoteCard.vue";
import {useSearchNote} from "../store/search-note-store.ts";

const searchNoteStore = useSearchNote()
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
    <NoteCard v-for="note in searchNoteStore.sortedNoteResults" :key="note.id" :note="note"/>
  </div>
</template>

<style scoped>

</style>