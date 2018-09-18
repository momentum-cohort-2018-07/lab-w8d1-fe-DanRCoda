import React, { Component } from 'react'

import textOptions from './textOptions'
import TextInput from './TextInput'

import ShrunkText from './ShrinkText'
import AllOptions from './AllOptions'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }

    this.updateText = this.updateText.bind(this)
    this.setOption = this.setOption.bind(this)
  }

  setOption (option) {
    return (event) => {
      const value = event.target.checked
      console.log(value)
      const optionSet = new Set(this.state.options)
      if (value) {
        optionSet.add(option)
      } else {
        optionSet.delete(option)
      }
      this.setState({
        options: [...optionSet]
      })
    }
  }

  updateText (event) {
    this.setState({ text: event.target.value })
  }

  shrinkText () {
    let { text, options } = this.state

    if (!text) {
      return ''
    }

    let opObj
    options.forEach(option => {
      opObj = textOptions.find(o => o.id === option)
      if (opObj) {
        text = opObj.fn(text)
      }
    })

    return text
  }

  render () {
    const { text } = this.state.text
    const shrunkText = this.shrinkText()
    return (
      <div className='App container'>
        <h1>TweetShrink</h1>
        <div className='row'>
          <div className='col' />
          <TextInput text={text} enterText={this.updateText} />
          <div className='col' />
          <ShrunkText shrunkText={shrunkText} />
        </div>
        <AllOptions textOptions={textOptions} setOption={this.setOption} />
      </div>
    )
  }
}

export default App
