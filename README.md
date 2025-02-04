# Infinite Loop in React useEffect Hook

This repository demonstrates a common error in React applications: an infinite loop caused by an improperly used `useEffect` hook. 

The `bug.js` file contains the buggy code. The effect function attempts to update the state variable `count` inside itself, creating an infinite render loop.

The corrected code is in `bugSolution.js`. The solution is to add the correct dependencies in the useEffect hook's array. By adding `count` as dependency, useEffect will only run when the count value changes and hence fixing the infinite loop.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the console and the rapidly incrementing count in the browser.
5. Compare `bug.js` with `bugSolution.js` to understand the fix.