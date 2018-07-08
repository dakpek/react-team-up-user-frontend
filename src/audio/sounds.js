const Pizzicato = require('pizzicato');

const Sounds = {
  sound1: () => {
    const sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'triangle',
        frequency: 130.81,
        volume: 0.4,
        attack: 0,
        release: 0.1,
    }
      });
      sound.play();
    setTimeout(()=> sound.stop(),50)
  },
  sound2: () => {
    const sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'saw',
        frequency: 174.61,
        volume: 0.4,
        attack: 0,
        release: 0.1,
    }
      });
      sound.play();
    setTimeout(()=> sound.stop(),50)
  },
  sound3: () => {
    const sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'triangle',
        frequency: 130.81,
        volume: 0.4,
        attack: 0,
        release: 0.1,
    }
      });
      sound.play();
    setTimeout(()=> sound.stop(),50)
  },
  sound4: () => {
    const sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'triangle',
        frequency: 174.61,
        volume: 0.4,
        attack: 0,
        release: 0.1,
    }
      });
      sound.play();
    setTimeout(()=> sound.stop(),50)
  },
  sound5: () => {
    const sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'triangle',
        frequency: 220.00,
        volume: 0.4,
        attack: 0,
        release: 0.1,
    }
      });
      sound.play();
    setTimeout(()=> sound.stop(),50)
  },
  sound6: () => {
    const sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'triangle',
        frequency: 261.63	,
        volume: 0.4,
        attack: 0,
        release: 0.1,
    }
      });
      sound.play();
    setTimeout(()=> sound.stop(),50)
  },
  sound8: () => {
    const sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'triangle',
        frequency: 196.00	,
        volume: 0.4,
        attack: 0,
        release: 0.1,
    }
      });
      sound.play();
    setTimeout(()=> sound.stop(),50)
  },
  sound9: () => {
    const sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'triangle',
        frequency: 261.63,
        volume: 0.4,
        attack: 0,
        release: 0.1,
    }
      });
      sound.play();
    setTimeout(()=> sound.stop(),50)
  }
}

export default Sounds;
