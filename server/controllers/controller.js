const axios = require("axios")

let characters = []
let newId = 58

const getCharacters = (req, res, next) => {
  axios("http://beta-api-kuroganehammer.azurewebsites.net/api/characters")
  .then(response => {
    // console.log(response)
    let map = response.data.filter(( e , i ) => response.data[i].Name!== "Bayonetta" && response.data[i].Name!== "Corrin" && response.data[i].Name!=="MiiGunner" && response.data[i].Name!== "MiiSwordfighter" && response.data[i].Name!=="Lucas" && response.data[i].ThumbnailUrl)
    // for(let i=0; i < characters.length; i++){
    //   return characters[i].id = i
    // }
    characters = map
    res.status( 200 ).json( characters )
  }
  ).catch (err => {
    console.log("Error", err)
    .res.status(500)
  }
  )}
  
const updateCharacters = (req, res, next) => {
  // console.log(characters);
  const index = characters.findIndex(characters => +characters.OwnerId === +req.params.id);
  characters[index].Name = req.body.Name
  res.status(200).json(characters)
  // console.log(index, characters[index])
}

addCharacter = (req, res, next) => {
  // const index = characters.findIndex(characters => +characters.OwnerId === req.params.id);
  // characters[index] = req.body
  let obj1 = req.body
  obj1.
  characters.push(req.body)
  newId = newId++
  res.json(characters)
}

module.exports = {
  getCharacters,
  updateCharacters,
  addCharacter
}