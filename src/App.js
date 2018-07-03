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
      user: {
        name: 'Michael',
        playlists: [
          {
            name: 'My Favorites',
            songs: [{name: 'thriller', duration: 1345}, {name: 'Bad', duration: 1345}, {name: 'Error', duration: 1345}, {name: 'hey Jude', duration: 1345}, {name: 'Someone Like you', duration: 1345}, {name: 'Imagine', duration: 1345}]
          },
          {
            name: 'My Favorites2',
            songs: [{name: 'thriller', duration: 1345}, {name: 'Bad', duration: 1345}, {name: 'Error', duration: 1345}, {name: 'hey Jude', duration: 1345}, {name: 'Someone Like you', duration: 1345}, {name: 'Imagine', duration: 1345}]
          },
          {
            name: 'My Favorites3',
            songs: [{name: 'thriller', duration: 1345}, {name: 'Bad', duration: 1345}, {name: 'Error', duration: 1345}, {name: 'hey Jude', duration: 1345}, {name: 'Someone Like you', duration: 1345}, {name: 'Imagine', duration: 1345}]
          },
          {
            name: 'My Favorites4',
            songs: [{name: 'thriller', duration: 1345}, {name: 'Bad', duration: 1345}, {name: 'Error', duration: 1345}, {name: 'hey Jude', duration: 1345}, {name: 'Someone Like you', duration: 1345}, {name: 'Imagine', duration: 1345}]
          }
        ]
      }
    }
  }
  render() {
    return (
      this.state.user && <div className='App'>
        <h1>{this.state.user.name + '\'s Playlist'}</h1>
        <PlaylistCounter playlists={this.state.user.playlists}/>
        <HoursCounter playlists={this.state.user.playlists}/>
        <Filter/>
        {
          this.state.user.playlists.map((i, key)=> <Playlist playlist={i} key={key}/>)
        }
      </div>
    )
  }
}

export default App
