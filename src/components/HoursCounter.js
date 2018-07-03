import React, { Component } from 'react'

export default class HourCounter extends Component {
    render() {
        let AllSongs = this.props.playlists.reduce((songs, eachPlay)=>{
            return songs.concat(eachPlay.songs)
        },[])
        let hours = AllSongs.reduce((sum, eachS)=>{
            return sum + eachS.duration
        }, 0)
        this.props.playlists.forEach(e => {
            e.songs.forEach(element => {
              hours += element.duration  
            })
        })
        hours = Math.floor(hours/60)
        return (
            <div style={{ width: '40%', display: 'inline-block' }}>
                <h2 className='wtxt'>{hours} Hours</h2>
            </div>
        )
    }
}