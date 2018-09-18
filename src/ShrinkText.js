import React, { Component } from 'react'

class ShrunkText extends Component {
  render () {
    const { shrunkText } = this.props
    console.log(shrunkText)
    return (
      <div>
        <div className='TextEntry-shrunk-text'>
          {shrunkText}
        </div>
        <div>
          {shrunkText && `${shrunkText.length} characters`}
        </div>
      </div>
    )
  }
}

export default ShrunkText
