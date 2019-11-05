import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import Slide from '../components/Slide'


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () => (
    <Fragment>
      <Slide />
    </Fragment>
  )
}