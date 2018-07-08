import React, { Component } from 'react'
import './console.css'
import blue from '../assets/blueArrow.png'
import red from '../assets/redArrow.png'
import socket from '../socket';
import Sounds from '../audio/sounds'
import black from '../assets/black.gif'
import lasers from '../assets/lasers.gif'
import pixelated from '../assets/pixelated.gif'
import redcloud from '../assets/redcloud.gif'
import red1 from '../assets/red1.gif'
import snowy from '../assets/snowy.gif'
import round from '../assets/round.gif'
import simple from '../assets/simple.gif'
import spaceinvader2 from '../assets/spaceinvader2.webp'
import snake from '../assets/snake.webp'
import winner from '../assets/winner.gif'
import giphy from '../assets/giphy.gif'
const Pizzicato = require('pizzicato');

class Console extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      gif: null,
      gifArray: [],
    }
    this.createGifArr()
    socket.on('playerEnterAnswer', (data) => this.setState({userData: data}));
    socket.on('announceWinner', (data) => {
      this.setState({winner: data})
      setTimeout(() => this.state.winner = null, 5000)
    });
    socket.on('startGame', (data) => this.setState({winner: null}));
  }

  createGifArr = () => {
    let gif_arr = []
    gif_arr.push(winner)
    gif_arr.push(black)
    gif_arr.push(giphy)
    gif_arr.push(lasers)
    gif_arr.push(redcloud)
    gif_arr.push(pixelated)
    gif_arr.push(red1)
    gif_arr.push(snowy)
    gif_arr.push(round)
    gif_arr.push(simple)
    gif_arr.push(spaceinvader2)
    gif_arr.push(snake)
    gif_arr.push(winner)
    gif_arr.push(simple)
    console.log(gif_arr);
    this.state.gifArray = gif_arr;
    console.log(this.state.gifArray);
  }

  pressUp = () => {
    this.makeSoundUp();
    socket.emit('pressUp', {
      ...this.state.userData,
      inputType:'up',
      })
    socket.emit('disconnect')
  }

  pressDown = () => {
    this.makeSoundDown();
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

  makeSoundUp = () => {
    if (this.state.userData.team === 'blue') Sounds.sound8()
    else Sounds.sound9()
  }

  makeSoundDown = () => {
    if (this.state.userData.team === 'blue') Sounds.sound8()
    else Sounds.sound9()
  }

  render() {
    return (
      <div className='console'>
        {/* <meta name="viewport" content="width=device-width, maximum-scale=1, minimum-scale=1, user-scalable=no"/> */}
          {this.state.winner
          ? <div className={this.state.winner === 'red' ? 'winner_announcer-red' : 'winner_announcer-blue'}>
            <h1 className="winner_announcer-h1">{`${this.state.winner.slice(0,1).toUpperCase()}${this.state.winner.slice(1)} team won!`}</h1>
            <p className="winner_announcer-p">Game restarting in 5 seconds<span>.</span><span>.</span><span>.</span></p>
            <img className="winner_GIF" src={this.state.gifArray[Math.floor(Math.random() * this.state.gifArray.length)]} alt="winner!" />
          </div>
        : null}
          <img onClick={() => this.pressUp()} className='arrowUp' src={this.renderArrows()} />
          <img onClick={() => this.pressDown()} className='arrowDown' src={this.renderArrows()} />
      </div>
    );
  }
}

export default Console
