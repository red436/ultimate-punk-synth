// This is for more intimate pizzacatto intigration
var paused = false;
var oscHerz = 30; // value in hertz
var modHerz = 15;
// create Oscillator node
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();
var modifier = audioCtx.createOscillator();
var amp = audioCtx.createGain();
amp.gain.setValueAtTime(1, audioCtx.currentTime);
oscillator.frequency.setValueAtTime(oscHerz, audioCtx.currentTime);
modifier.frequency.setValueAtTime(modHerz, audioCtx.currentTime);
oscillator.type = 'square';
modifier.type = 'square';

modifier.connect(amp.gain);
oscillator.connect(amp).connect(audioCtx.destination);

console.log('Initialized');

function startOsc() {
  if(paused === false)
  {
    oscillator.start();
    modifier.start();
  }
  else {
    audioCtx.resume();
  }
}
function stopOsc() {
  paused = true;
  audioCtx.suspend();
}
jQuery('#start').on('click', startOsc);
jQuery('#stop').on('click', stopOsc);
jQuery(document).on('keydown', function(e) {if(e.which === 38) {oscillator.frequency.value++; console.log('Oscillator: ' + oscillator.frequency.value);} if(e.which === 40) { oscillator.frequency.value --; console.log('Oscillator: ' + oscillator.frequency.value);} if(e.which === 37) { modifier.frequency.value--; console.log('Modifier: ' + modifier.frequency.value); } if(e.which === 39) { modifier.frequency.value++; console.log('Modifier: ' + modifier.frequency.value); }});
