import React, {Component} from 'react';
import './Fighters.css'

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
            <img alt='fighter' className="fighterImg" src={fighters[i].MainImageUrl} onClick={ () => this.props.removeFighter(fighters[i])}/>
            <img alt='new-fighter' className="newImg" src={fighters[i].subImg}/>
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