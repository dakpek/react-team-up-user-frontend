const context = new AudioContext()
const o = context.createOscillator()
const g = context.createGain()
o.connect(g)
g.connect(context.destination)
const X = 1
const frequency = 87.31
o.frequency.value = frequency;
o.type = 'triangle';
g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + X)
const play = () => {
  o.start(0)
}


export default play;
