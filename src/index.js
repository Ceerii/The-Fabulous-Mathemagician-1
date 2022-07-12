import '../css/index.css';
import Display from './Display';
import Game from './Game';

const root = document.getElementById('root');
const display = new Display(root);
new Game(display);
