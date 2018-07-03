import React, { Component } from 'react'

import PlaylistCounter from './components/PlaylistCounter'
import HoursCounter from './components/HoursCounter'
import Filter from './components/Filter'
import Playlist from './components/Playlist'
 
import './style/main.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      filterS: '',
      user: {
        name: 'Michael',
        playlists: [
          {
            name: 'My Favorites',
            songs: [{name: 'thriller', duration: 1345}, {name: 'Bad', duration: 1345}, {name: 'Error', duration: 1345}, {name: 'hey Jude', duration: 1345}, {name: 'Someone Like you', duration: 1345}, {name: 'Imagine', duration: 1345}]
          },
          {
            name: 'Other Type List',
            songs: [{name: 'thriller', duration: 1345}, {name: 'Bad', duration: 1345}, {name: 'Error', duration: 1345}, {name: 'hey Jude', duration: 1345}, {name: 'Someone Like you', duration: 1345}, {name: 'Imagine', duration: 1345}]
          },
          {
            name: 'Weekly Discover',
            songs: [{name: 'thriller', duration: 1345}, {name: 'Bad', duration: 1345}, {name: 'Error', duration: 1345}, {name: 'hey Jude', duration: 1345}, {name: 'Someone Like you', duration: 1345}, {name: 'Imagine', duration: 1345}]
          },
          {
            name: 'Love Song',
            songs: [{name: 'thriller', duration: 1345}, {name: 'Bad', duration: 1345}, {name: 'Error', duration: 1345}, {name: 'hey Jude', duration: 1345}, {name: 'Someone Like you', duration: 1345}, {name: 'Imagine', duration: 1345}]
          }
        ]
      }
    }
  }
  
  componentDidMount(){}

  render() {
    return (
      this.state.user && <div className='App'>
        <h1>{this.state.user.name + '\'s Playlist'}</h1>
        <PlaylistCounter playlists={this.state.user.playlists}/>
        <HoursCounter playlists={this.state.user.playlists}/>
        <Filter onInput={filterS => this.setState({filterS})} filter={this.state.filterS}/>
        {
          this.state.user.playlists.filter(i=> i.name.toLowerCase().includes(this.state.filterS) ? i : null).map((i, key)=> <Playlist playlist={i} key={key}/>)
        }
      </div>
    )
  }
}

export default App
