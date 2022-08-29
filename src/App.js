// importing  React and files from component

import React, { Component } from 'react'
import './App.css'
import Tool from './Tool'
import SelectPosition from './SelectPosition'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showToolTip:false,
       position:'top',
    }
  }

  // function to changeTooltip position

  changeShowToolTip = () => {
    console.log('Mouseover')
    const { showToolTip } = this.state;
    let position = document.getElementById("positions").value;
    this.setState({
      showToolTip:!showToolTip,
      position
    })
  }

  render() {
    return (
      <div className='App'>
        <Tool state={this.state} 
         changeShowToolTip = {this.changeShowToolTip}
         />
         <SelectPosition/>
      </div>

    )
  }
}

export default App
