import React, { Component } from 'react'

export default class Playlist extends Component {
    render(){
        return(
            <div className='wtxt playlist'>
                <img/>
                <h3>{this.props.playlist.name}</h3>
                <ul>
                    {this.props.playlist.songs.map((i, key)=> <li key={key}>{i.name}</li>)}
                </ul>
            </div>
        )
    }
}