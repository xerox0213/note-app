import {defineStore} from "pinia";
import {ref} from "vue";
import {EditType} from "../ts/enums.ts";

export const useEditModal = defineStore("edit-modal", () => {
    const isVisible = ref<boolean>(false);
    const noteId = ref<number>(-1)
    const editType = ref<EditType>(EditType.ADD)

    const displayEditModal = (noteIdVal: number, editTypeVal: EditType) => {
        if (editTypeVal == EditType.UPDATE) throw new Error("Note ID is invalid")
        noteId.value = noteIdVal
        editType.value = editTypeVal
        isVisible.value = true
    }
    const closeEditModal = () => isVisible.value = false
    const getIsVisible = () => isVisible.value
    const getNoteId = () => noteId.value
    const getEditType = () => editType.value;

    return {
        displayEditModal,
        closeEditModal,
        getIsVisible,
        getNoteId,
        getEditType
    }
})