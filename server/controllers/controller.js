const axios = require("axios")

let characters = []
let newId = 58

const getCharacters = (req, res, next) => {
  axios("http://beta-api-kuroganehammer.azurewebsites.net/api/characters")
  .then(response => {
    let map = response.data.filter(( e , i ) => response.data[i].Name!== "Bayonetta" && response.data[i].Name!== "Corrin" && response.data[i].Name!=="MiiGunner" && response.data[i].Name!== "MiiSwordfighter" && response.data[i].Name!=="Lucas" && response.data[i].ThumbnailUrl)
    characters = map
    res.status( 200 ).json( characters )
  }
  ).catch (err => {
    console.log("Error", err)
    .res.status(500)
  }
  )}
  
const updateCharacters = (req, res, next) => {
  const index = characters.findIndex(characters => +characters.OwnerId === +req.params.id);
  characters[index].Name = req.body.Name
  res.status(200).json(characters)
}

const deleteCharacter = (req, res, next) => {
  const index = characters.findIndex(characters => +characters.OwnerId === +req.params.id);
  characters.splice(index, 1)
  res.status(200).json( characters )
}

addCharacter = (req, res, next) => {
  let obj1 = req.body
  obj1.OwnerId = newId
  characters.push(obj1)
  newId = newId++
  res.json(characters)
}

module.exports = {
  getCharacters,
  updateCharacters,
  addCharacter,
  deleteCharacter
}