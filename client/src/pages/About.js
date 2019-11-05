import React, { Component } from 'react'

import Tel from '../components/def/Tel'
import Mail from '../components/def/Mail'


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () => (
    <div className="About">
      <h2 className="h2">О нас</h2>
      Самые редкие материалы только у нас<br /><br />
      <h2 className="h2">Контакты</h2>
      <Tel number="+79217406762" /><br />
      <Mail address="lev.vasilyev.email@gmail.com" />
    </div>
  )
}