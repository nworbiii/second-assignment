import React, { Component } from 'react'
import './Char.css'

const Char = props => {
    return (
        <div className="Char" onClick={props.click}>
            <p>{props.text}</p>
        </div>
    )
}

export default Char;