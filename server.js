const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
app.use(express.static("public"))
app.use(express.json())

app.get("/notes", (req, res) => {

    res.sendFile(path.join(__dirname, "/public/notes.html"))
})
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (error, data) => {
        res.send(data)
    })
})
app.listen(3001)
