// importing  React and files from component

import React, { Component } from 'react'
import './SelectPositions.css'

class SelectPosition extends Component {
  render() {
    return (
      <div className='position-selector'>
        <label>Select The Position</label>
        <select name='positions' id='positions'>
            <option value='top'>Top</option>
            <option value='right'>Right</option>
            <option value='bottom'>Bottom</option>
            <option value='left'>Left</option>
        </select>

      </div>
    )
  }
}

export default SelectPosition