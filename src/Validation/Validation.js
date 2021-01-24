import React, { Component } from 'react'
import './Validation.css'

const Validation = props => {
    return (
        props.textLength > 4 ?
        <p>Text long enough</p> :
        <p>Text too short</p>
    )
}

export default Validation