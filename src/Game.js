class Game {
  static operator = ['+'];
  constructor(display) {
    this.round = 0;
    this.operator = null;
    this.firstNumber = null;
    this.secondNumber = null;
    this.display = display;
    this.startTime = null;
  }

  generateExpression() {
    this.firstNumber = Math.floor(Math.random() * 10);
    this.secondNumber = Math.floor(Math.random() * 10);
    this.operator = Game.operator[0];
  }

  validateExpression(ans) {
    const validAns = this.firstNumber + this.secondNumber;
    const compare = validAns === parseInt(ans);
    if (compare && this.round < 3) {
      this.play();
    } else if (compare && this.round == 3) {
      this.end();
    }
  }

  end() {
    this.round = 0;
    this.operator = null;
    this.firstNumber = null;
    this.secondNumber = null;
    const timeSpent = Date.now() - this.startTime;
    this.display.render(
        this.firstNumber,
        this.secondNumber,
        this.operator,
        timeSpent,
        'endScreen');
  }

  play() {
    if (!this.startTime) {
      this.startTime = Date.now();
    }
    this.round++;
    this.generateExpression();
    this.display.render(this.firstNumber, this.secondNumber, this.operator);
  }
}

export default Game;
