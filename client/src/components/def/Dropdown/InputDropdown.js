import React, { Component, Fragment } from 'react'

import Input from '../Input'


class InputDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typedValue: this.props.value,
      neverTypedFlag: true,
      oldPropValue: this.props.value,
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (state.oldPropValue !== props.value) {
  //     state.oldPropValue = props.value

  //     if (props.value !== state.typedValue &&
  //         props.value !== null &&
  //         props.value !== "" &&
  //         typeof props.value !== "undefined") {
  //       state.typedValue = props.value
  //       state.neverTypedFlag = false

  //       if (props.required) {
  //         props.updateOptions && props.updateOptions(props.value)
  //         props.setOpened(true)
  //       }
  //     }
  //   }

  //   return state
  // }

  close = () => {
    let value
    if (this.props.required)
      value = (this.props.options.length > 0 && this.props.options[0].value) || ""
    else
      value = this.state.typedValue
    // this.props.onChange(value)

    this.props.setOpened(false)
    this.setState({typedValue: value})

    this.props.inputFieldRef && this.props.inputFieldRef.current.blur()
  }

  onChange = value => {
    this.setState({neverTypedFlag: false})
    this.setState({typedValue: value})
    this.props.updateOptions && this.props.updateOptions(value)
    // this.props.onChange("")
  }

  setValue = value => {
    // this.setState({typedValue: value})
    if (typeof value.id !== "undefined")
      this.props.onChange(value)
  }

  renderOptions = () => this.props.options && this.props.options
    .map((option, index) => {
      const style = option.style || {}

      return (
        <div
          key={index}
          style={style}
          className="form-group__input--dropdown__options__item"
          onClick={() => this.setValue(option)}
        >
          {typeof option === "string" ? option : option.render()}
        </div>
      )
    })

  render = () => (
    <Fragment>
      <Input
        inputFieldRef={this.props.inputFieldRef}
        //somehow it blurs input on iOS
        // className={"form-group__input--dropdown " + (this.props.opened ? "active" : '')}
        placeholder={this.props.placeholder}
        required={this.props.required}
        value={(this.state.neverTypedFlag && this.props.value) || this.state.typedValue}
        onChange={value => this.onChange(value)}
        onFocus={() => this.props.setOpened(true)}
        disabled={this.props.disabled}
        showReset={this.props.showReset}
      />
      <div className={"form-group__input--dropdown__options " + (this.props.relativeOptionsList && "relative")}>
        {this.props.opened && this.renderOptions()}
      </div>
    </Fragment>
  )
}

export default InputDropdown