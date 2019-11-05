import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Img from './def/Img'
import Tel from './def/Tel'
import Mail from './def/Mail'
import Dropdown from './def/Dropdown'

import logoImg from '../img/logo.png'

import { Context } from '../store'

import routes from '../routes'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searh: "",
      currentOptions: [],
    }
  }

  updateOptions = value =>
    this.setState({
      currentOptions: this.context.store
        .search({name: value})
        .map(option => ({
          ...option,
          value: option.id,
          render: () => option.name
        }))
    })

  handleDropdownChange = option => {
    // if (option === "") {
    //   this.setState({
    //     search: "",
    //     currentOptions: [],
    //   })
    // }
    // else
    console.log("/item/" + option.id)
    this.props.history.push("/item/" + option.id)
  }

  render = () => (
    <header className="Header">
      <div className="container">
        <div className="Header__top">
          <Link to="/">
            <div className="Header__top__logo">
              <Img src={logoImg} />
            </div>
          </Link>
          <div className="Header__top__desc">
            <h2 className="h2">Хормигон</h2>
            <small className="small">
              Завод редких ж/б и м/б конструкций для дорожного строительства
            </small>
          </div>
          {/* <div className="Header__top__delimeter" /> */}
          <div className="Header__top__contacts">
            <Tel number="+79217406762" />
            <Mail address="lev.vasilyev.email@gmail.com" />
          </div>
        </div>
        <div className="Header__nav">
          {routes
            .filter(item => !item.path.includes(":"))
            .map(item => (
              <Link
                to={item.path}
                className="Header__nav__item"
              >
                {item.label}
              </Link>
            ))}
        </div>
        <div className="Header__search">
          <div className="col-10 px-0 pr-4">
            <Dropdown
              input
              value={this.state.searh}
              options={this.state.currentOptions}
              updateOptions={this.updateOptions.bind(this)}
              onChange={this.handleDropdownChange.bind(this)}
              placeholder="Поиск изделия..."
              showReset
            />
          </div>
          <div className="col-2 px-0">
            <button className="button button--main">
              Поиск
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.contextType = Context
export default withRouter(Header)