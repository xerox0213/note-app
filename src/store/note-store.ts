import {defineStore} from "pinia";
import {ref} from "vue";
import {Note} from "../ts/types.ts";

export const useNote = defineStore('notes', () => {
    const notes = ref<Note[]>([])

    let id = 0;

    const getNote = (noteId: number) => {
        let note = notes.value.find((n) => n.id === noteId)
        if (note) note = JSON.parse(JSON.stringify(note))
        return note
    }

    const addNote = (title: string, content: string, tags: string[]) => {
        const newNote: Note = {id: id++, title, content, tags: [...tags], pinned: false}
        notes.value.push(newNote)
    }

    const updateNote = (noteId: number, title: string, content: string, tags: string[]) => {
        const note = notes.value.find((n) => n.id === noteId)
        if (note) {
            note.title = title
            note.content = content
            note.tags = [...tags]
        }
    }

    const removeNote = (noteId: number) => {
        notes.value.filter((n) => n.id !== noteId)
    }

    const togglePinNote = (noteId: number) => {
        const note = notes.value.find((n) => n.id === noteId)
        if (note) note.pinned = !note.pinned
    }

    return {
        notes,
        getNote,
        addNote,
        updateNote,
        removeNote,
        togglePinNote
    }
})