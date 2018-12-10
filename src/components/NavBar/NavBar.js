import React from 'react'
import "./NavBar.css"
import "./Smash-bros.jpg"

// let winner = props.randomNumber(props.fighters).Name

const NavBar = props => (
  <nav className="navBar">
    <div className="smashButton" onClick={() => window.alert(`Congratulations ${(props.randomNumber(props.fighters)).Name}`)}></div>
  </nav>
)

export default NavBar