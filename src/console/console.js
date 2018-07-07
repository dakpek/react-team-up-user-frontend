import React, { Component } from 'react'
import './console.css'
import blue from '../assets/blueArrow.png'
import red from '../assets/redArrow.png'
import socket from '../socket';

class Console extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      gif: null
    }
    this.getGIF()
    socket.on('playerEnterAnswer', (data) => this.setState({userData: data}));
    socket.on('announceWinner', (data) => {
      this.setState({winner: data})
      setTimeout(() => this.state.winner = null, 5000)
    });
    socket.on('startGame', (data) => this.setState({winner: null}));
  }

  pressUp = () => {
    this.makeSound1();
    socket.emit('pressUp', {
      ...this.state.userData,
      inputType:'up',
      })
    socket.emit('disconnect')
  }

  pressDown = () => {
    this.makeSound2();
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

  makeSound1 = () => {
    // console.log();
    // if (!AudioContext) return
    // const context = new AudioContext()
    // const o = context.createOscillator()
    // const g = context.createGain()
    // o.connect(g)
    // g.connect(context.destination)
    // const X = 1
    // const frequency = 87.31
    // o.frequency.value = frequency;
    // o.type = 'triangle';
    // g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + X)
    // o.start(0)
    // o.stop(1)
  }
  makeSound2 = () => {
    // if (!AudioContext) return
    // const context = new AudioContext()
    // const o = context.createOscillator()
    // const g = context.createGain()
    // o.connect(g)
    // g.connect(context.destination)
    // const X = 1
    // const frequency = 103.83
    // o.frequency.value = frequency;
    // o.type = 'triangle';
    // g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + X)
    // o.start(0)
    // o.stop(1)
  }

  getGIF = async () => {
    let gif = await fetch('https://api.giphy.com/v1/gifs/random?api_key=p9o7fLb5VqGqqlFujsbci38bsFLi5CME&tag=win&rating=G')
    gif = await gif.json()
    console.log(gif.data.embed_url);
    this.setState({gif:gif.data.images.fixed_height.url})
  }

  render() {
    return (
      <div className='console'>
          {this.state.winner
          ? <div className={this.state.winner === 'red' ? 'winner_announcer-red' : 'winner_announcer-blue'}>
            <h1 className="winner_announcer-h1">{`${this.state.winner.slice(0,1).toUpperCase()}${this.state.winner.slice(1)} team won!`}</h1>
            <p className="winner_announcer-p">{`Game restarting in 5 seconds...`}</p>
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
