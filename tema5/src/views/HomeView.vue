<script setup>
import { ref } from "vue"
import Sidebar from "../components/Sidebar.vue"
import NoteForm from "../components/NoteForm.vue"
import MainContent from "../components/MainContent.vue"

const showForm = ref(false)


const openForm = () => {
    showForm.value = true
}

const closeForm = () => {
    showForm.value = false
}

const deleteNote = (id) => {
    notes.value = notes.value.filter(note => note.id !== id)
}
</script>

<template>
    <div class="flex">
        <Sidebar @showForm="openForm" />
        <MainContent :notes="notes" @delete-note="deleteNote" />
        <NoteForm v-if="showForm" @close="closeForm" />
    </div>
</template>
