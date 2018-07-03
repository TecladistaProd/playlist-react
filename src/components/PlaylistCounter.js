import React, { Component } from 'react'

export default class PlaylistCounter extends Component {
    render() {
        return(
            <div style={{width:'40%', display:'inline-block'}}>
                <h2 className='wtxt'>{this.props.playlists.length} Playlists</h2>
            </div>
        )
    }
}