<script setup lang="ts">
import {PlusIcon} from "@heroicons/vue/24/solid";
import {useEditModal} from "../store/edit-modal-store.ts";
import {EditType} from "../ts/enums.ts";

const editModalStore = useEditModal()

const displayEditModal = () => {
  editModalStore.displayEditModal(-1, EditType.ADD)
}
</script>

<template>
  <button @click="displayEditModal"
          class="fixed right-8 bottom-8 p-2 bg-blue-500 rounded-lg transition-colors hover:bg-blue-600">
    <PlusIcon class="size-9 text-white"/>
  </button>
</template>

<style scoped>

</style>