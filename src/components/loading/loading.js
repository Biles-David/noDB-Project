import React from 'react'
import ReactLoading from "react-loading"
import './loading.css'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
// import {Section, Title, Article, Prop, list} from "./generic";

const Loading = props => (
  <section className="parentLoading">
    <HeaderLogo />
    <img className = "loading" src="https://thumbs.gfycat.com/FlawlessImpassionedIlsamochadegu-max-1mb.gif"/>
  </section>


)

export default Loading;