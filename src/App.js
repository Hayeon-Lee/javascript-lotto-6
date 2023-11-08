import Input from './view/Input.js';

class App {
  #money;
  #lotto;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#money = 0;
    this.#lotto = [];
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
    this.input = new Input();
  }

  async play() {}
}

const app = new App();
app.play();

export default App;
