import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Context } from '../store'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () => {
    const item = this.context.store.get({id: this.props.match.params.id})
    return (
      <div className="">
        Страница для <b>{item.name}</b> <br />
        {item.desc}
      </div>
    )
  }
}

Home.contextType = Context
export default Home