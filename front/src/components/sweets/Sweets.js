import React from 'react'
import "./sweet.css"
import About from "../../about.png"

const Sweets = () => {
  return (
    <div className='about topMargin'>
      <div className='container flex'>
        <div className='left mtop'>
          <div className='heading'>
            <h3>About US</h3>
            <h2>Value Title</h2>
          </div>
          <p>Value Description</p>
          <p>Value Description</p>
          <p>Value Description</p>
          <p>Value Description</p>
        </div>
        <div className='right'>
          <div className='img'>
            <img alt='pic' src={About} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sweets