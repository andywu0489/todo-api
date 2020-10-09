
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const PORT = 4000
const cors = require("cors")
const todoRoutes = require("./routes/todo_routes")
const mongoose = require("mongoose")

app.use(cors())

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/todo-app", {
  useFindAndModify: false
})

mongoose.Promise = Promise

app.use(todoRoutes)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})