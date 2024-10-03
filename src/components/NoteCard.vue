<script setup lang="ts">

import {Note} from "../ts/types.ts";
import {PencilIcon, TrashIcon} from "@heroicons/vue/24/solid";
import {TagIcon} from "@heroicons/vue/24/outline";
import {useNote} from "../store/note-store.ts";
import {useEditModal} from "../store/edit-modal-store.ts";
import {EditType} from "../ts/enums.ts";

type Props = { note: Note }
defineProps<Props>()

const noteStore = useNote()
const editModalStore = useEditModal()

const removeNote = (noteId: number) => {
  noteStore.removeNote(noteId)
}

const editNote = (noteId: number) => {
  editModalStore.displayEditModal(noteId, EditType.UPDATE)
}

const togglePinNote = (noteId: number) => {
  noteStore.togglePinNote(noteId)
}
</script>

<template>
  <div class="flex flex-col gap-y-3 p-4 bg-white rounded-md border border-gray-300 relative hover:shadow-lg transition-shadow">
    <div class="flex items-baseline gap-x-4">
      <h2 class="text-2xl font-semibold flex-grow">{{ note.title }}</h2>
      <button @click="togglePinNote(note.id)">
        <TagIcon class="size-5 transition-colors hover:text-blue-500"
                 :class="{'text-gray-400' : !note.pinned, 'text-blue-500' : note.pinned}"/>
      </button>
    </div>
    <p class="whitespace-nowrap overflow-hidden text-ellipsis">{{ note.content}}</p>
    <div class="flex gap-x-4">
      <div class="flex flex-grow flex-wrap gap-1.5">
        <span class="text-gray-500 text-sm" v-for="tag in note.tags">{{ `#${tag}` }}</span>
      </div>
      <div class="flex gap-1.5 items-start">
        <button @click="editNote(note.id)">
          <PencilIcon class="size-5 text-gray-400 transition-colors hover:text-teal-500"/>
        </button>
        <button @click="removeNote(note.id)">
          <TrashIcon class="size-5 text-gray-400 transition-colors hover:text-red-500"/>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>