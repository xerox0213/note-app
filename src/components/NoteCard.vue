<script setup lang="ts">

import {Note} from "../ts/types.ts";
import {PencilIcon, TrashIcon} from "@heroicons/vue/24/solid";
import {TagIcon} from "@heroicons/vue/24/outline";

type Props = { note: Note }
const props = defineProps<Props>()

</script>

<template>
  <div class="flex flex-col gap-y-3 p-4 rounded-md border border-gray-300 relative hover:shadow-lg transition-shadow">
    <div class="flex items-baseline gap-x-4">
      <h2 class="text-2xl font-semibold flex-grow">{{ note.title }}</h2>
      <button>
        <TagIcon class="size-5 transition-colors hover:text-blue-500"
                 :class="{'text-gray-400' : !note.pinned, 'text-blue-500' : note.pinned}"/>
      </button>
    </div>
    <p>{{ `${note.content.slice(0, 50)}...` }}</p>
    <div class="flex gap-x-4">
      <div class="flex flex-grow flex-wrap gap-1.5">
        <span class="text-gray-500 text-sm" v-for="tag in note.tags">{{ `#${tag}` }}</span>
      </div>
      <div class="flex gap-1.5 items-start">
        <button>
          <PencilIcon class="size-5 text-gray-400 transition-colors hover:text-teal-500"/>
        </button>
        <button>
          <TrashIcon class="size-5 text-gray-400 transition-colors hover:text-red-500"/>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>