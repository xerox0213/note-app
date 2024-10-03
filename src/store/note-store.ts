import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {Note} from "../ts/types.ts";
import {getData, persistData} from "../utils/localstorage.ts";

export const useNote = defineStore('notes', () => {
    const savedNotes = getData("notes")
    const notes = ref<Note[]>(savedNotes ? JSON.parse(savedNotes) : [])

    let id = notes.value.length !== 0 ? notes.value[notes.value.length - 1].id + 1 : 0

    const search = ref<string>("")
    const cleanedSearch = computed(() => search.value.trim().toLowerCase())

    const filteredNotes = computed(() => {
        if (cleanedSearch.value) {
            return notes.value.filter((n) => {
                const includesInTitle = n.title.toLowerCase().includes(cleanedSearch.value)
                const includesInTags = n.tags.findIndex((t) => t.includes(cleanedSearch.value)) != -1
                return includesInTitle || includesInTags
            })
        }

        return notes.value
    })

    const sortedNotes = computed(() => {
        return filteredNotes.value.slice().sort((a, b) => {
            if (a.pinned && !b.pinned) return -1
            else if (!a.pinned && b.pinned) return 1
            else return 0
        })
    })

    const getNote = (noteId: number) => {
        let note = notes.value.find((n) => n.id === noteId)
        if (note) note = JSON.parse(JSON.stringify(note))
        return note
    }

    const addNote = (title: string, content: string, tags: string[]) => {
        const newNote: Note = {id: id++, title, content, tags: tags.map((t) => t.toLowerCase()), pinned: false}
        notes.value.push(newNote)
        persistData("notes", notes.value)
    }

    const updateNote = (noteId: number, title: string, content: string, tags: string[]) => {
        const note = notes.value.find((n) => n.id === noteId)
        if (note) {
            note.title = title
            note.content = content
            note.tags = tags.map((t) => t.toLowerCase())
            persistData("notes", notes.value)
        }
    }

    const removeNote = (noteId: number) => {
        notes.value = notes.value.filter((n) => n.id !== noteId)
        persistData("notes", notes.value)
    }

    const togglePinNote = (noteId: number) => {
        const note = notes.value.find((n) => n.id === noteId)
        if (note) {
            note.pinned = !note.pinned
            persistData("notes", notes.value)
        }
    }

    const makeSearch = (input: string) => search.value = input

    return {
        notes: sortedNotes,
        getNote,
        addNote,
        updateNote,
        removeNote,
        togglePinNote,
        makeSearch
    }
})