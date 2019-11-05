import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'


export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () => (
    <div className="App">
      <Header />
      <div className="container">
        {this.props.children}
      </div>
      <Footer />
    </div>
  )
}