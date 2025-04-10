import express from "express"
import bodyParser from "body-parser"

const api = express()
const port = 3000

let notes = [
  {
    id: 1,
    title: "Plan vacation",
    description: "Research destinations and book tickets for summer trip",
    label: "Personal"
  },
  {
    id: 2,
    title: "Team brainstorming",
    description: "Prepare slides for Monday’s creative session",
    label: "Work"
  },
  {
    id: 3,
    title: "Doctor appointment",
    description: "Visit dentist at 15:30, don't forget insurance card",
    label: "Important"
  },
  {
    id: 4,
    title: "Birthday gift ideas",
    description: "Find something for Alex – maybe a smartwatch?",
    label: "Social"
  },
  {
    id: 5,
    title: "Guitar practice",
    description: "Learn the intro to ‘Hotel California’",
    label: "Personal"
  },
  {
    id: 6,
    title: "Submit assignment",
    description: "Upload Java project to university portal before Friday",
    label: "Work"
  },
  {
    id: 7,
    title: "Prayer night prep",
    description: "Prepare a short devo and pick 2 songs for worship",
    label: "Important"
  },
  {
    id: 8,
    title: "Call grandma",
    description: "Catch up and check how she’s doing",
    label: "Social"
  }
]

api.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
  res.setHeader("Access-Control-Allow-Credentials", true)
  next()
})

api.use(bodyParser.json())

api.get("/api/notes", (req, res) => {
  res.json(notes)
})

api.post("/api/notes", (req, res) => {
  const newNote = req.body
  newNote.id = notes.length + 1
  notes.push(newNote)
  res.status(201).json(newNote)
})

api.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params
  notes = notes.filter(note => note.id !== parseInt(id))
  res.status(204).end()
})

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
