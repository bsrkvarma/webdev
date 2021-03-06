// @flow

// <<: add-func
// Explicit type annotations:
let add = function(x: number, y: number): number {
  return x + y;
};
// :>>

/*
// <<: add-call
// This will fail type checking:
add("1", 2);
// :>>
*/

/*
// <<: add-return
// Also fails type checking:
let sum = add(1, 2);
console.log(sum.length);
// :>>
*/
