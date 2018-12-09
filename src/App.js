import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Characterselect from './components/CharacterSelect/Characterselect'
import Fighters from './components/FighterSelect/fighters'
import NavBar from './components/NavBar/NavBar'
import AddCharacter from './components/AddCharacter'

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      characters: [],
      fighters: [],
      canEdit: false,
      isDataLoaded: false,
      canAdd: false
    }
    this.addFighter = this.addFighter.bind(this)
    this.removeFighter = this.removeFighter.bind(this)
    this.handleCanEditClick = this.handleCanEditClick.bind(this)
    this.handleCanAddClick = this.handleCanAddClick.bind(this)
    this.editChar = this.editChar.bind(this)
  }

  componentDidMount(){
    axios(`/api/characters`)
      .then(response => {
        console.log(response)
        this.setState({ characters: response.data, isDataLoaded: true })
      })
  }

  editChar(Name, id){
    console.log(Name, id)
    axios.put(`/api/characters/${id}`, {Name})
      .then(response => {
        // this.setState({canEdit: false})
        console.log(response.data);
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
    // console.log(val)
  }

  removeFighter(val) {
    let arr = [...this.state.fighters]
    let i = arr.findIndex( (elm) => elm === val)
    arr.splice(i,1)
    this.setState({fighters: arr})
  }


  render() {
    return (
      <div className="App">
        <nav>
          <NavBar/>
        </nav>
        <div className="fight">
          <Characterselect characters={this.state.characters} 
            handleKeyPress={this.handleKeyPress} 
            addFighter={this.addFighter}
            canEdit={this.state.canEdit}
            handleCanEditClick={this.handleCanEditClick}
            canAdd={this.state.canAdd}
            handleCanAddClick={this.handleCanAddClick}
            fighters={this.state.fighters}
            editChar={this.editChar}/>
            <AddCharacter className={this.state.canAdd? "addCharacter" : "hidden"}/>
        </div>
        <footer className ="CharacterFight">
          <Fighters fighters={this.state.fighters} removeFighter={this.removeFighter}/>
        </footer>
      </div>
    );
  }
}

export default App;
