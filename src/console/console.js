import React, { Component } from 'react'
import './console.css'
import blue from '../assets/blueArrow.png'
import red from '../assets/redArrow.png'
import socket from '../socket';
import Sounds from '../audio/sounds'
import black from '../assets/black.gif'
import blocks from '../assets/blocks.gif'
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
      winner: 'blue',
      gif: null
    }

    this.gifArray()
    }
    gifArray = () => {
      let gif_arr = []
      // gif_arr.push(perrier)
      gif_arr.push(winner)
      // gif_arr.push(dots)
      gif_arr.push(blocks)
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
      console.log(gif_arr)

    this.getGIF()
    socket.on('playerEnterAnswer', (data) => this.setState({userData: data}));
    socket.on('announceWinner', (data) => {
      this.setState({winner: data})
      setTimeout(() => this.state.winner = null, 5000)
    });
    socket.on('startGame', (data) => this.setState({winner: null}));
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

  playAgain = () => {
    socket.emit('userPlayAgain', {
      ...this.state.userData
    })
  }

  renderArrows = () => {
    return this.state.userData
      ? this.state.userData.team === 'blue'
        ? blue : red
      : null
  }

  makeSoundUp = () => {
    // const rand = Math.random()
    // if (rand <= 0.3) Sounds.sound1()
    // else if (rand <= 0.6) Sounds.sound2()
    // else if (rand <= 1) Sounds.sound3()
    if (this.state.userData.team === 'blue') Sounds.sound1()
    else Sounds.sound2()

  }

  makeSoundDown = () => {
    // const rand = Math.random()
    // if (rand <= 0.3) Sounds.sound4()
    // else if (rand <= 0.6) Sounds.sound5()
    // else if (rand <= 1) Sounds.sound6()
    if (this.state.userData.team === 'blue') Sounds.sound8()
    else Sounds.sound9()
  }

  getGIF = async () => {
    let gif = await fetch('https://api.giphy.com/v1/gifs/random?api_key=p9o7fLb5VqGqqlFujsbci38bsFLi5CME&tag=win&rating=G')
    gif = await gif.json()
    console.log(gif.data.embed_url);
    this.setState({gif:gif.data.images.fixed_width.url})
  }

  // componentWillUpdate() {
  //   let w_height = window.innerHeight();
  //   let w_width = window.innerWidth();
  //   this.setState({w_height, w_width})
  // }

  render() {
    return (
      <div className='console'>
        <meta name="viewport" content="width=device-width, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
          {this.state.winner
          ? <div className={this.state.winner === 'red' ? 'winner_announcer-red' : 'winner_announcer-blue'}>
            <h1 className="winner_announcer-h1">{`${this.state.winner.slice(0,1).toUpperCase()}${this.state.winner.slice(1)} team won!`}</h1>
            <p className="winner_announcer-p">Game restarting in 5 seconds<span>.</span><span>.</span><span>.</span></p>
            <img class="winner_GIF" src={this.state.gif} alt="winner!" />
            {/* <div onClick={null}><iframe className='winner_GIF' src={this.state.gif} frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div> */}
          </div>
        : null}
          <img onClick={() => this.pressUp()} className='arrowUp' src={this.renderArrows()} />
          <img onClick={() => this.pressDown()} className='arrowDown' src={this.renderArrows()} />
      </div>
    );
  }
}

export default Console
