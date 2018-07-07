import React, { Component } from 'react'
import './console.css'
import blue from '../assets/blueArrow.png'
import red from '../assets/redArrow.png'

class Console extends Component {



  render() {
    return (
      <div className='console'>
        <div className='arrowUp'>
          <img className='arrow-up' src={blue} />
        </div>

        <div className='arrowDown'>
          <img className='arrow-down' src={blue} />
        </div>
      </div>
    );
  }



}

export default Console
