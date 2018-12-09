import React, {Component} from 'react';
import './fighters.css'

class Fighters extends Component {
  constructor(props){
    super (props)
    this.state = {
      fighterName: ''
    }
  }

  render(){
    if(this.props.fighters){
        let fighters = this.props.fighters
        var bigPic = fighters.map( (e,i) => {
          return <div className="fighterSelect">
            <img className="fighterImg" src={fighters[i].MainImageUrl} onClick={ () => this.props.removeFighter(fighters[i])}/>
            <input className ="fighterName" placeholder={`Player ${i + 1}`}/>
          </div>
        }) 
      }

    return (
      <div className="fullFighter">
        {bigPic}
      </div>
    )
  }
  
}

export default Fighters;