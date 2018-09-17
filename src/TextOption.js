import React, { Component } from 'react'

class TextOption extends Component {
  render () {
    const { option } = this.props
    return (
      <label htmlFor={option.id}>
        <input type='checkbox' id={option.id} onChange={this.props.setOption(option.id)} /> {' ' + option.label}
      </label>
    )
  }
}

export default TextOption
