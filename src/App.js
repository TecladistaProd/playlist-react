import React, { Component } from 'react'

import Aggregate from './components/Aggregate'
import Filter from './components/Filter'
import Playlist from './components/Playlist'
 
import './style/main.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='App'>
        <h1>Test</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    )
  }
}

export default App
