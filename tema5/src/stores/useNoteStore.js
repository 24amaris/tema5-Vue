import { defineStore } from "pinia"
import axios from "axios"

export const useNoteStore = defineStore("note", {
  state: () => ({
    notes: [],
    loading: false,
    error: null,
    activeLabel: "All"
  }),

  actions: {
    async fetchNotes(label = null) {
      this.loading = true
      this.error = null

      try {
        const res = await axios.get("http://localhost:3000/api/notes")
        let data = res.data
        console.log(this.activeLabel)
        if (this.activeLabel && this.activeLabel !== "All") {
          data = data.filter(note => note.label === this.activeLabel)
        }

        this.notes = data
      } catch (err) {
        console.error("Failed to fetch notes:", err)
        this.error = "Failed to fetch notes. Please try again later."
      } finally {
        this.loading = false
      }
    },
    setActiveLabel(label) {
      this.activeLabel = label
      this.fetchNotes()
    },
    async addNote(newNote) {
      this.loading = true
      this.error = null

      try {
        const res = await axios.post("http://localhost:3000/api/notes", newNote)
        this.notes.unshift(res.data)
      } catch (err) {
        console.error("Failed to add note:", err)
        this.error = "Failed to add note. Please try again later."
      } finally {
        this.loading = false
      }
    },

    async deleteNote(id) {
      this.loading = true
      this.error = null

      try {
        await axios.delete(`http://localhost:3000/api/notes/${id}`)
        this.notes = this.notes.filter(note => note.id !== id)
      } catch (err) {
        console.error("Failed to delete note:", err)
        this.error = "Failed to delete note. Please try again later."
      } finally {
        this.loading = false
      }
    }
  }
})
