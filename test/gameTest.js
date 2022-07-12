
import { screen } from '@testing-library/dom';
import Display from '../src/Display';
import Game from '../src/Game';

describe("check that game screen shows", () => {
    test("there are elements with test id number on the screen", () => {
        expect(screen.queryAllByTestId('number')).toBeDefined()
    });

    test("there are 2 elements", () => {
        expect(screen.queryAllByTestId('number')).toHaveLength(2);
    });

    test("element one is a number", () => {
        let array = [];
        screen.queryAllByTestId('number').map((item) => {
          array.push(parseInt(item.innerHTML));
        })
        expect(array[0]).not.toBeNaN();
    });
    test("element two is a number", () => {
        let array = [];
        screen.queryAllByTestId('number').map((item) => {
          array.push(parseInt(item.innerHTML));
        })
        expect(array[1]).not.toBeNaN();
    });

    test("an input with test id input-box exists", () => {
        expect(screen.queryByTestId('input-box')).toBeDefined();
    });

    test("an input with test id input-box exists and the value is empty", () => {
        expect(screen.queryByTestId('input-box').value).toContain('');
    });
});

describe("check that the game can be played", () => {
    const root = document.getElementById('root');
    const display = new Display(root);
    const game = new Game(display);
    game.play();
    const startTime = game.startTime;
    const firstNumber = game.firstNumber;
    const secondNumber = game.secondNumber;
    test("time has started counting and that our start time is less than our curren time", () => {
        expect(startTime).toBeLessThanOrEqual(Date.now());
    });
});





