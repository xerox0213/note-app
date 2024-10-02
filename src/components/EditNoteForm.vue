<script setup lang="ts">
import {PlusIcon, XMarkIcon} from "@heroicons/vue/24/solid";
import {EditType} from "../ts/enums.ts";
import {computed, ref} from "vue";
import {useNote} from "../store/note-store.ts";
import {useEditModal} from "../store/edit-modal-store.ts";

const editModalStore = useEditModal()
const noteId = editModalStore.getNoteId()
const editType = editModalStore.getEditType()
const noteStore = useNote()
const note = noteStore.getNote(noteId)

const inputTitle = ref<string>(note ? note.title : "")
const title = computed(() => inputTitle.value.trim())

const inputContent = ref<string>(note ? note.content : "")
const content = computed(() => inputContent.value.trim())

const inputTag = ref<string>("")
const tag = computed(() => inputTag.value.toLowerCase().trim())
const tags = ref<string[]>(note ? note.tags : [])

const completeForm = computed(() => title.value != "" && content.value != "")

const addTag = () => {
  if (tag.value && !tags.value.includes(tag.value)) {
    tags.value.push(tag.value)
    inputTag.value = ""
  }
}
const deleteTag = (tag: string) => tags.value = tags.value.filter((t) => t !== tag)

const closeEditModal = () => editModalStore.closeEditModal()

const handleSubmit = () => {
  if (completeForm.value) {
    if (editType == EditType.UPDATE) {
      noteStore.updateNote(noteId, title.value, content.value, tags.value)
    } else {
      noteStore.addNote(title.value, title.value, tags.value)
    }
    closeEditModal()
  }
}
</script>

<template>
  <div class="flex flex-col gap-5 p-5 bg-white rounded basis-[700px]">
    <div>
      <div class="flex justify-between items-center">
        <label for="note-title" class="text-gray-400 mb-1.5">TITLE</label>
        <button @click="closeEditModal">
          <XMarkIcon class="size-6 text-gray-400 transition-colors hover:text-gray-600"/>
        </button>
      </div>
      <input v-model="inputTitle" type="text" placeholder="Some title" id="note-title"
             class="text-3xl outline-0 w-full">
    </div>
    <div>
      <label for="note-content" class="block text-gray-400 mb-1.5">CONTENT</label>
      <textarea v-model="inputContent"
                placeholder="Your content"
                id="note-content"
                rows="7"
                class="block size-full bg-gray-100 p-2.5 outline-0"/>
    </div>
    <div>
      <label for="note-tags" class="block text-gray-400 mb-1.5">TAGS</label>
      <div class="flex flex-wrap gap-2 mb-1.5">
        <div :key="tag" v-for="tag in tags" class="flex items-center gap-2 bg-gray-100 py-1 px-3 rounded">
          <span>{{ `#${tag}` }}</span>
          <button @click="deleteTag(tag)">
            <XMarkIcon class="size-4 text-black"/>
          </button>
        </div>
      </div>
      <div class="flex items-center gap-x-2">
        <input v-model="inputTag" type="text" placeholder="Add tag"
               class="border border-gray-200 py-1.5 px-2.5 rounded">
        <button @click="addTag" class="border border-blue-700 rounded hover:bg-blue-700">
          <PlusIcon class="size-7 text-blue-700 hover:text-white"/>
        </button>
      </div>
    </div>
    <button @click="handleSubmit" class="p-1.5 bg-blue-500 text-white rounded transition-colors hover:bg-blue-600">
      {{ editType.charAt(0).toUpperCase() + editType.slice(1).toLowerCase() }}
    </button>
  </div>
</template>

<style scoped>

</style>