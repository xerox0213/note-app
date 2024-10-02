import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useNote} from "./note-store.ts";

export const useSearchNote = defineStore("search-note", () => {
    const noteStore = useNote()
    const inputUserSearch = ref<string>("")
    const userSearch = computed(() => {
        return inputUserSearch.value.trim()
    })

    const noteResults = computed(() => {
        if (userSearch.value) {
            return noteStore.notes.filter((n) => n.title.includes(userSearch.value))
        }

        return noteStore.notes
    })

    const sortedNoteResults = computed(() => {
        return noteResults.value.slice().sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return 0;
        })
    })

    return {
        inputUserSearch,
        sortedNoteResults,
    }
})