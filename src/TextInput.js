import React, { Component } from 'react'

class TextInput extends Component {
  // enterText (event) {
  //   this.setState({enterText: event.target.value})
  // }
  render () {
    console.log(this.props.text)
    const { text, updateText } = this.props
    return (
      <div>
        <textarea
          className='TextEntry-textbox'
          placeholder='What do you want to shrink?'
          onChange={updateText}
          value={text} />
        <div>
          {text && `${text.length} characters`}
        </div>
      </div>
    )
  }
}

export default TextInput
