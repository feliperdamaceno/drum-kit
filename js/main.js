// =-=-=-=-=-=-=-=-=-= Program =-=-=-=-=-=-=-=-=-=

window.addEventListener('load', drum);

function drum() {
  const keys = document.querySelectorAll('.key');

  // Mouse event
  keys.forEach(key => {
    key.addEventListener('click', playNote);
  });

  // Keyboard event
  window.addEventListener('keydown', playNote);
}

// =-=-=-=-=-=-=-=-=-= Abstractions =-=-=-=-=-=-=-=-=-=

function playNote(event) {
  const audioKey = getKey(event);
  const key = document.querySelector(`button[data-key="${audioKey}"]`);

  const canFindKey = !key;
  if (canFindKey) {
    return;
  }

  addPlayAnimation(key);
  playAudio(audioKey);
  removePlayAnimation(key);
}

function playAudio(key) {
  const audioKey = document.querySelector(`audio[data-audio="${key}"]`);
  audioKey.currentTime = 0;
  audioKey.play();
}

function getKey(event) {
  if (event.type === 'keydown') {
    return event.key;
  }
  return event.target.getAttribute('data-key');
}

function addPlayAnimation(target) {
  target.classList.add('playing');
}

function removePlayAnimation(target) {
  target.addEventListener('transitionend', () => {
    target.classList.remove('playing');
  });
}
