import React, { Component } from 'react'

export default class Filter extends Component {
    render(){
        return(
            <div className='wtxt'>
                <img/>
                <input type='text' value={this.props.filter} onChange={e => this.props.onInput(e.target.value.toLowerCase())}/>
            </div>
        )
    }
}
