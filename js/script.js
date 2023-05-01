document.addEventListener('DOMContentLoaded', () => {
  const keyboard = document.createElement('div');
  const textArea = document.createElement('textarea');
  textArea.classList.add('container');
  textArea.style.height = '50px';
  keyboard.id = 'keyboard';
  keyboard.classList.add('container');
  document.body.appendChild(keyboard);

  const keyArray = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

  function initKeys() {
    let out = '';
    for (let i = 0; i < keyArray.length; i++) {
      out += '<div class="key">' + String.fromCharCode(keyArray[i]) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
  }

  if (!document.getElementById('keyboard')) {
    console.error('Keyboard element not found');
  } else {
    initKeys();
  }
});
