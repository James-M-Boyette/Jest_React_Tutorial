/**
 ** Video #1:
 *   Here, we declare our first, overly-simple test to make sure everything is set up correctly, and demonstrate the bare-bones functionality of Jest ...
 */

// This test does nothing except avoid the initial "no tests found" error message
test("Video #1's 'Placeholder' Test ...", () => {
  expect(true).toBeTruthy(); // Literally "expect 'true' to be 'truthy'"
});

import { addFunction, totalFunction } from "./App";

/**
 ** Video #3:
 *    Here, we declare our first real ("Unit") test
 *    Note: since this only tests *one* thing, it is called a "unit" test.
 *          If this tested a function that called another function (which maybe called a third function) ... or a React component that called other React components, THAT would be called a "integration" test - where you want to test how your code is working TOGETHER as much as the success of any individual function
 */

test("Video #3's addFunction ...", () => {
  const value = addFunction(1, 2);
  expect(value).toBe(3);
  expect(addFunction(2, 2)).toBe(4);
});

/**
 ** Video #4:
 *    Here, we declare our first "integration" test - where our 'totalFunction' has two numbers passed to it, and then calls our 'addFunction' to do the actual mathematical work.
 */

test("Video #4's totalFunction ...", () => {
  expect(totalFunction(5, 20)).toBe("$25");
});
