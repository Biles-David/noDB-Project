const express = require("express")
const {json} = require("body-parser")
const {getCharacters, updateCharacters, addCharacter, deleteCharacter} = require("./controllers/controller")
const port = 3001

const app = express()
app.use(json())

app.get("/api/characters", getCharacters)
app.put("/api/characters/:id", updateCharacters)
app.post("/api/characters", addCharacter)
app.delete("/api/characters/:id", deleteCharacter)


app.listen(port, () => {console.log(`Listening on port ${port}`)})