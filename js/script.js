document.addEventListener('DOMContentLoaded', () => {
  const keyboard = document.createElement('div');
  const textArea = document.createElement('textarea');
  textArea.classList.add('container');
  textArea.style.height = '50px';
  keyboard.id = 'keyboard';
  keyboard.classList.add('container');
  document.body.appendChild(textArea);
  document.body.appendChild(keyboard);

  const keyArray = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

  function initKeys() {
    let out = '';
    for (let i = 0; i < keyArray.length; i++) {
      if (i === 13 || i === 37) {
        out += '<div class="clearfix"></div>';
      }
      out += `<div class="key" data="${keyArray[i]}">${String.fromCharCode(keyArray[i])}</div>`;
    }
    document.querySelector('#keyboard').innerHTML = out;
  }

  const keyboardElement = document.getElementById('keyboard');
  if (!keyboardElement) {
    console.error('Keyboard element not found');
  } else {
    initKeys();
  }

  document.querySelectorAll('#keyboard .key').forEach((element) => {
    element.addEventListener('mousedown', (event) => {
      const code = element.getAttribute('data');
      element.classList.add('active');
      textArea.value += String.fromCharCode(code);
      textArea.focus();
    });

    element.addEventListener('mouseup', (event) => {
      element.classList.remove('active');
      textArea.focus();
    });

    element.addEventListener('touchstart', (event) => {
      const code = element.getAttribute('data');
      element.classList.add('active');
      textArea.value += String.fromCharCode(code);
      textArea.focus();
    });

    window.addEventListener('keydown', (event) => {
      const pressedKey = event.keyCode;
      if (keyArray.includes(pressedKey)) {
        const keyElements = document.querySelectorAll(`#keyboard .key[data="${pressedKey}"]`);
        keyElements.forEach((keyElement) => {
          keyElement.classList.add('active');
        });
        textArea.focus();
      }
    });

    window.addEventListener('keyup', (event) => {
      const releasedKey = event.keyCode;
      if (keyArray.includes(releasedKey)) {
        const keyElements = document.querySelectorAll(`#keyboard .key[data="${releasedKey}"]`);
        keyElements.forEach((keyElement) => {
          keyElement.classList.remove('active');
        });
        textArea.focus();
      }
    });
  });
});
