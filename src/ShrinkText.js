import React, { Component } from 'react'

class ShrinkText extends Component {
  render () {
    return (
      <div>
        <div className='TextEntry-shrunk-text'>
          {this.props.shrunkText}
        </div>
        <div>
          {this.props.shrunkText && `${this.props.shrunkText.length} characters`}
        </div>
      </div>
    )
  }
}

export default ShrinkText
