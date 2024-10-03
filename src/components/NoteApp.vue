<script setup lang="ts">

import Header from "./Header.vue";
import Notes from "./Notes.vue";
import AddNoteBtn from "./AddNoteBtn.vue";
import EditNoteModal from "./EditNoteModal.vue";
import {useEditModal} from "../store/edit-modal-store.ts";

const editModalStore = useEditModal()
</script>

<template>
  <Header/>
  <main class="pt-7 px-3">
    <Transition>
      <EditNoteModal v-if="editModalStore.getIsVisible()"/>
    </Transition>
    <Notes/>
    <AddNoteBtn/>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity .2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>