/*
==================================================
ye file  studentData.js se data ko access kari ga
==================================================
*/

// Import default export + named exports
import moduleName from "./studentData.js";
import { students, sayHello } from "./studentData.js";

console.log("Module Name:", moduleName);

console.log("Student List:", students);
sayHello();

/*
REAL LIFE USE CASE:
- Backend exports DB functions
- Frontend imports them
- React components import helpers
*/

// some more concepts
let data = [1, 2, 3];
let newData = [...data, 4, 5, 6];
console.log(newData);

function sum(...values) {
  console.log(values);
}

sum(1, 2);
sum(1, 3);
sum(1, 3, 4, 5);
