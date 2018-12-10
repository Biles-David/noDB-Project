import React, {Component} from 'react';
import "./AddCharacter.css"

class AddCharacter extends Component {
  constructor (props){
    super(props)
    this.state = {
      charName: '',
      CharUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    let {charName, charUrl} = this.state
    return(
      <div className= {this.props.canAdd? "addScreen": "hidden"} > 
        <div className="midText">
          <img className="mario" src="https://i.pinimg.com/originals/fd/6c/8d/fd6c8d4067c5cdf0ee2caeb92f6f9413.png"/>
          <br/>
          <span>Character Name:</span><input name="charName" onChange={this.handleChange}></input>
          <br/>
          <span>Character Image URL: </span><input name="charUrl" onChange={this.handleChange}></input>
          <br/>
          <button onClick={() => this.props.addCharacter(charName, charUrl)}>Submit!</button>
        </div>
      </div>
    )
  }
}

export default AddCharacter;