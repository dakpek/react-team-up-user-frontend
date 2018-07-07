import React, { Component } from 'react'
import './console.css'
import blue from '../assets/blueArrow.png'
import red from '../assets/redArrow.png'
import socket from '../socket';

class Console extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    socket.on('playerEnterAnswer', (data) => this.setState({userData: data}))
  }

  pressUp = () => {
    console.log(this.state.userData);
    socket.emit('pressUp', {
      ...this.state.userData,
      inputType:'up',
      })
  }

  pressDown = () => {
    socket.emit('pressDown', {
      ...this.state.userData,
      inputType:'down'
    })
  }

  renderArrows = () => {
    return this.state.userData
      ? this.state.userData.team === 'blue'
        ? blue : red
      : null
  }

  render() {
    return (
      <div className='console'>
          <img onClick={() => this.pressUp()} className='arrowUp' src={this.renderArrows()} />
          <img onClick={() => this.pressDown()} className='arrowDown' src={this.renderArrows()} />
      </div>
    );
  }
}

export default Console
