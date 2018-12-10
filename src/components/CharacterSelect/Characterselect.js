import React, {Component} from 'react'
import './characterSelect.css'

class Characterselect extends Component {
  constructor (props){
    super(props)
    this.state = {
      newName: '',
      id: 0,
      editName: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(e){
    this.setState({newName: ''})

  }

  handleChange(e){
    // console.log(e.target.name)
    this.setState({
      newName: e.target.value,
      id: e.target.name
    })
  }

  render (){
    let character = this.props.characters
    let {newName, id} = this.state

    // console.log(this.state.newName)

    if(this.props.characters){
      var thumbnail = character.map( (e,i) => {
        return <div className="inChar">
                <img className ="inCharImg" src={character[i].ThumbnailUrl} 
                  onClick={ () => this.props.addFighter(character[i])} alt={character[i].Name}/>
                <input
                  value={this.state.newName}
                  className={this.props.canEdit? 'inCharEditName' :"inCharName"} 
                  name={e.OwnerId} placeholder={character[i].Name}
                  onChange={this.handleChange} 
                  disabled={this.props.canEdit? false: true}
                  >{character.Name}
                </input>
                <button 
                  className={this.props.canEdit? "deleteBtn" : "hidden"} 
                  onClick={() => this.props.deleteCharacter(e.OwnerId)}
                  name={e.OwnerId}>-</button>
              </div>
        }
      )
    }

    return (
      <div className="CharacterSelect">
        {thumbnail}
        <div className='editButtons'>
          <button className="canEdit" onClick={this.props.handleCanEditClick}>{ this.props.canEdit? "Cancel Edit": "Edit"}</button>
          <button
            className={this.props.canEdit? "canSubmit" : "hidden"} 
            onClick={() => {
              this.props.editChar(newName, id)
              this.handleClick()
            }}>Submit</button>
        </div>
        <div className="addButtons">
          <button className="canAdd" onClick={this.props.handleCanAddClick}>{this.props.canAdd?"Cancel":"Add New"}</button>
          {/* Moved this functionality */}
          {/* <button className={this.props.canAdd? "addSubmit" : "hidden"}>Submit</button> */}
        </div>
      </div>
    )
  }
}

export default Characterselect;