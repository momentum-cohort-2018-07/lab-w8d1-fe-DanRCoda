import React, { Component } from 'react'
import TextOption from './TextOption'

class AllOptions extends Component {
  render () {
    const { textOptions, setOption } = this.props
    return (
      <div className='row options'>
        <div className='col-12'>
          <h4>Options</h4>
        </div>
        {/* TextOptions */}
        {textOptions.map((option, idx) => (
          <TextOption key={idx} option={option} setOption={setOption} />
        ))}
        {/* end TextOptions */}
      </div>
    )
  }
}

export default AllOptions
