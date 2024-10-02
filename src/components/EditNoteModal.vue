<script setup lang="ts">

import Modal from "./Modal.vue";
import EditNoteForm from "./EditNoteForm.vue";
import {useEditModal} from "../store/edit-modal-store.ts";

const editModalStore = useEditModal()
</script>

<template>
  <Modal :close-modal="editModalStore.closeEditModal">
    <EditNoteForm/>
  </Modal>
</template>

<style scoped>

</style>