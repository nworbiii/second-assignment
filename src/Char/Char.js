import React, { Component } from 'react'
import './Char.css'

const Char = props => {
    return (
        <div className="Char">
            <p onClick={props.click}>{props.text}</p>
        </div>
    )
}

export default Char;