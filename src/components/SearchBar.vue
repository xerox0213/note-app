<script setup lang="ts">
import {MagnifyingGlassIcon} from "@heroicons/vue/24/outline"
import {useNote} from "../store/note-store.ts";
import {ref, watchEffect} from "vue";

const noteStore = useNote()
const input = ref<string>("")

watchEffect(() => noteStore.makeSearch(input.value))
</script>

<template>
  <div class="flex items-center bg-gray-100 px-4 py-2 rounded">
    <input v-model="input" type="text" placeholder="Search notes"
           class="grow bg-transparent rounded outline-0"/>
    <MagnifyingGlassIcon class="size-4 text-gray-500"/>
  </div>
</template>

<style scoped>

</style>