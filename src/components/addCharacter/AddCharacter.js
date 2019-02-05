import React, {Component} from 'react';
import "./AddCharacter.css"
import HeaderLogo from '../HeaderLogo/HeaderLogo'

class AddCharacter extends Component {
  constructor (props){
    super(props)
    this.state = {
      charName: '',
      charUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleClear(){
    this.setState({
      charName: '',
      charUrl: ''
    })
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
        <HeaderLogo canAdd={this.props.canAdd}/>
          <img alt='i-want-you' className="mario" src="https://i.pinimg.com/originals/fd/6c/8d/fd6c8d4067c5cdf0ee2caeb92f6f9413.png"/>
          <br/>
          <span>Character Name:</span><input value={this.state.charName} name="charName" onChange={this.handleChange}></input>
          <br/>
          <span>Character Image URL: </span><input value={this.state.charUrl} name="charUrl" onChange={this.handleChange}></input>
          <br/>
          <button 
          onClick={() => {
          this.props.addCharacter(charName, charUrl)
          this.handleClear()
          }}>Submit!</button>
        </div>
      </div>
    )
  }
}

export default AddCharacter;