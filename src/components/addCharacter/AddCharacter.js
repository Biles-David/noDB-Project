import React, {Component} from 'react';
import "./AddCharacter.css"

class AddCharacter extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <div className= {this.props.canAdd? "addScreen": "hidden"} > 
        <div className="midText">
          <img className="mario" src="https://i.pinimg.com/originals/fd/6c/8d/fd6c8d4067c5cdf0ee2caeb92f6f9413.png"/>
          <br/>
          <span>Character Name:</span><input></input>
          <br/>
          <span>Image URL: </span><input></input>
          <br/>
          <button>Submit!</button>
        </div>
      </div>
    )
  }
}

export default AddCharacter;