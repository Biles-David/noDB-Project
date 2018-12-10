import React from 'react';
import "./NavBar.css";
import "./Smash-bros.jpg";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mini from '../Mini/Mini'


      // {if(props.fighters.length === 1){toast.warning("Are you going to fight yourself?!")
      //   }else if(props.fighters.length !==0){toast.success(`Congratulations ${(props.randomNumber(props.fighters)).Name}`)
      //   }else{toast.error("No Fighters")}}

const NavBar = props => (
  <nav className="navBar">
    <ToastContainer position="top-center"/>
    <div className="smashButton" 
    onClick={() => 
      {if(props.fighters.length === 1){toast.warning("Are you going to fight yourself?!")
        }else if(props.fighters.length !==0){toast.success(`Congratulations ${(props.randomNumber(props.fighters)).Name}`)
        }else{toast.error("No Fighters")}}
    // toast.success(props.fighters.length === 1? "Are you going to fight yourself?!": props.fighters.length !==0 ?`Congratulations ${(props.randomNumber(props.fighters)).Name}` : "No Fighters")
    }></div>
    <form className="form">
      {/* <img className="logo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Smash_Ball.png/400px-Smash_Ball.png"/> */}
      <select className="selector" name="gameTypes">
        <option>Time</option>
        <option>Stock</option>
      </select>
    </form>
    <form className="numForm">
      <select className="numberSel">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </form>
    <Mini />
    
  </nav>

)

export default NavBar