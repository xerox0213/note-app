<script setup lang="ts">

import NoteCard from "./NoteCard.vue";
import {useNote} from "../store/note-store.ts";

const noteStore = useNote();

const onBeforeLeave = (el: Element) => {
  const width = el.getBoundingClientRect().width
  const htmlElement = el as HTMLElement
  htmlElement.style.width = `${width}px`
}
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
    <TransitionGroup @before-leave="onBeforeLeave" name="list">
      <NoteCard v-for="note in noteStore.notes" :key="note.id" :note="note"/>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all .2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  z-index: -1;
}
</style>