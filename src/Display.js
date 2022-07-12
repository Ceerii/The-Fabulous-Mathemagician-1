import Game from './Game';

class Display {
  constructor(root) {
    this.root = root;
  }
  render(
      firstNumber = null,
      secondNumber = null,
      operator = null,
      timeSpent = null,
      state = 'gameScreen'
  ) {
    switch (state) {
      case 'endScreen':
        root.innerHTML = `
          <div class='container'>
            <div class='box'>
              <p class='end-text'>Game Over. Time Spent : ${timeSpent} ms</p>
            </div>
           </div>`;
        break;
      case 'gameScreen':
        root.innerHTML = `
          <div class='container'>
            <div class='box'>
              <p class='number' data-testid='number'>${firstNumber}</p>
              <p class='operator'>${operator}</p>
              <p class='number' data-testid='number'>${secondNumber}</p>
              <p class='operator'>=</p>       
              <form id='answerForm'>
                <input name='answer' 
                data-testid='input-box' type='number' class='input-box' />
              </form>
            </div>
          </div> `;
        break;
    }
  }

  async submit() {
    const form = document.getElementById('answerForm');
    const formData = new FormData(form);
    const answer = await formData.get('answer');
    game.validateExpression(answer);
  }
}

export default Display;

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
const display = new Display(root);
const game = new Game(display);
game.play();

root.addEventListener('submit', async (event) => {
  event.preventDefault();
  display.submit();
});
