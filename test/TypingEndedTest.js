/**
 * @jest-environment jsdom
 */


import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder


describe("Numbers Exist", () => {


    test("if the numbers to be added exists", () => {
     const value = document.getElementsByClassName('number');
        expect(value).toBeTruthy();
});
  });

describe("Game Ends Successfully", () => {
    test("if game goes through all the rounds", () => {
     const value = document.getElementsByClassName('end-text');
        expect(value).toBeTruthy();
});
  });