import React, {Component} from 'react'
import "./NavBar.css"
import "./Smash-bros.jpg"

const NavBar = props => (
  <nav className="navBar">
    <div className="smashButton" onClick={() => console.log('Smash')}></div>
  </nav>
)

export default NavBar