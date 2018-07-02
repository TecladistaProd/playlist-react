import React, { Component } from 'react'

export default class Playlist extends Component {
    render(){
        return(
            <div className='wtxt playlist'>
                <img/>
                <h3>Playlist Name</h3>
                <ul>
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                </ul>
            </div>
        )
    }
}