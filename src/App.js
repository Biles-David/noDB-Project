import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import CharacterSelect from './components/CharacterSelect/CharacterSelect'
import Fighters from './components/Fighters/Fighters'
import NavBar from './components/NavBar/NavBar'
import AddCharacter from './components/AddCharacter/AddCharacter'
import ReactPlayer from 'react-player'
import Loading from './components/Loading/Loading';

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      characters: [],
      fighters: [],
      canEdit: false,
      isDataLoaded: false,
      canAdd: false,
    }
    this.addFighter = this.addFighter.bind(this)
    this.removeFighter = this.removeFighter.bind(this)
    this.handleCanEditClick = this.handleCanEditClick.bind(this)
    this.handleCanAddClick = this.handleCanAddClick.bind(this)
    this.editChar = this.editChar.bind(this)
    this.deleteCharacter = this.deleteCharacter.bind(this)
    this.addCharacter = this.addCharacter.bind(this)
  }

  componentDidMount(){
    axios(`/api/characters`)
      .then(response => {
        this.setState({ characters: response.data, isDataLoaded: true })
      })
  }

  randomNumber(arr){
    function random(){
      return Math.floor(Math.random() * ((arr.length + 1) - 1) + 1)
    }
    return arr[random() - 1]
  }

  addCharacter(name, url){
    let newChar = {
      Name: name,
      ThumbnailUrl: url,
      subImg: url,
      MainImageUrl: "http://kuroganehammer.com/Smash4/logo2/Shulk.png"
    }
    axios.post(`/api/characters`, newChar)
      .then(response => {
        this.setState({
          characters: response.data, 
          canAdd: false
        })
      })
  }

  editChar(Name, id){
    console.log(Name, id)
    axios.put(`/api/characters/${id}`, {Name})
      .then(response => {
        this.setState({characters: response.data, canEdit: false})
      })
  }

  deleteCharacter(id){
    axios.delete(`/api/characters/${id}`)
      .then(response => {
        this.setState({characters: response.data})
      })
  }

  handleCanEditClick(){
    if(this.state.fighters.length < 1){
      if(this.state.canEdit){
        this.setState({canEdit: false})
      }else{
        this.setState({canEdit: true})
      }
    }
  }

  handleCanAddClick(){
    if(this.state.fighters.length < 1){
      if(this.state.canAdd){
        this.setState({canAdd: false})
      }else{
        this.setState({canAdd: true})
      }
    }
  }

  addFighter(val) {
    let arr = [...this.state.fighters, val]
    if(arr.length < 5){
    this.setState({fighters: arr, fighterreload: true})
    }
  }

  removeFighter(val) {
    let arr = [...this.state.fighters]
    let i = arr.findIndex( (elm) => elm === val)
    arr.splice(i,1)
    this.setState({fighters: arr})
  }

  render() {
    let {isDataLoaded} = this.state

    if(!isDataLoaded){return <Loading/>}else{
    return (
      <div className="App">
        <ReactPlayer 
        className ="hidden"
        url="https://www.youtube.com/watch?v=JD33HjaO4iA"
        playing
        />
        <nav>
          <NavBar fighters={this.state.fighters} randomNumber={this.randomNumber}/>
        </nav>
        <div className="fight">
          <CharacterSelect characters={this.state.characters} 
            handleKeyPress={this.handleKeyPress} 
            addFighter={this.addFighter}
            canEdit={this.state.canEdit}
            handleCanEditClick={this.handleCanEditClick}
            canAdd={this.state.canAdd}
            handleCanAddClick={this.handleCanAddClick}
            fighters={this.state.fighters}
            editChar={this.editChar}
            deleteCharacter={this.deleteCharacter}/>
            <AddCharacter className={this.state.canAdd? "addCharacter" : "hidden"} canAdd={this.state.canAdd}
            addCharacter={this.addCharacter}/>
        </div>
        <footer className ="CharacterFight">
          <Fighters fighters={this.state.fighters} removeFighter={this.removeFighter}/>
        </footer>
      </div>
    )
  }}
}

export default App;
