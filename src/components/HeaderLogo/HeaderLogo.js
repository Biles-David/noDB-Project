import React from 'react'
import './HeaderLogo.css'

const HeaderLogo = props => (
  <img className={props.canAdd? "addLogo" :"SSBU"} src="https://www.ssbwiki.com/images/b/b6/Super_Smash_Bros._for_Nintendo_Switch.svg"/>
)

export default HeaderLogo;