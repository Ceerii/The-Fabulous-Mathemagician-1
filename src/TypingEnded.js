class TypingEnded {
  getGame() {
    const startTime = Date.now();
    let elapsedTime;
    const interval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
    }, 100);


    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);

    const firstNumberText = document.createElement('h2');
    const plusSign = document.createElement('p');
    const secondNumberText = document.createElement('h2');
    const equalToSign = document.createElement('p');
    const inputBox = document.createElement('input');

    firstNumberText.setAttribute('data-testid', 'test-number');
    firstNumberText.className = 'number';
    secondNumberText.className = 'number';
    plusSign.className = 'operator';
    equalToSign.className = 'operator';
    inputBox.className = 'input-box';
    inputBox.type ='number';

    firstNumberText.textContent = Math.floor(Math.random() * 10);
    plusSign.textContent = '+';
    secondNumberText.textContent = Math.floor(Math.random() * 10);
    equalToSign.textContent = '=';

    box.appendChild(firstNumberText);
    box.appendChild(plusSign);
    box.appendChild(secondNumberText);
    box.appendChild(equalToSign);
    box.appendChild(inputBox);

    let isTyping;

    inputBox.onkeyup = () => {
      clearTimeout(isTyping);
      isTyping = setTimeout(typingEnded, 300);
    };

    inputBox.onkeydown = () => {
      clearTimeout(isTyping);
    };

    let round = 1;

    function typingEnded() {
      const inputValue = parseInt(inputBox.value);
      const firstNumberTextParsed = parseInt(firstNumberText.innerHTML);
      const secondNumberTextParsed = parseInt(secondNumberText.innerHTML);
      const correctSum = firstNumberTextParsed + secondNumberTextParsed;
      if (inputValue === correctSum && round < 3) {
        round++;
        firstNumberText.textContent = Math.floor(Math.random() * 10);
        secondNumberText.textContent = Math.floor(Math.random() * 10);
        inputBox.value = '';
      } else if (inputValue === correctSum && round === 3) {
        clearInterval(interval);
        const gameEndsText = document.createElement('h2');
        gameEndsText.className = 'end-text';
        gameEndsText.textContent = `Game Over. Time Spent : ${elapsedTime} ms`;
        box.replaceChildren(gameEndsText);
      }
    }
  }
}

export default TypingEnded;
