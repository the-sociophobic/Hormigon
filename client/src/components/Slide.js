import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Img from '../components/def/Img'
import { Context } from '../store'


class Slide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
    
    setInterval(() => this.indexAdd(1), 2000)
  }

  indexAdd = number => this.setState({
    index: (this.state.index + number + this.context.store.get().length * 10) % this.context.store.get().length
  })

  render = () => {
    const items = this.context.store.get()
    const currentItem = items[this.state.index]

    return (
      <Link to={"/item/" + currentItem.id}>
        <div className="Slide">
          <div className="Slide__content-container">
            <div className="Slide__img">
              <Img src={currentItem.img} />
            </div>
            <div className="Slide__text">
              <h2 className="h2">
                {currentItem.name}
              </h2>
              <span>
                {currentItem.desc}
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

Slide.contextType = Context
export default Slide