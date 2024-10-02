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
    <EditNoteModal v-if="editModalStore.getIsVisible()"/>
    <Notes/>
    <AddNoteBtn/>
  </main>
</template>

<style scoped>

</style>