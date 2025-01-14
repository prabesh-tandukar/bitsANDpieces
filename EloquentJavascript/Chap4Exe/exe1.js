// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55

function range(start, end, step = -1) {
  let array = [];

  const goingUp = start <= end;

  //   if (goingUp && step < 0) {
  //     throw new Error("Cannot use negative step for ascending range");
  //   }
  //   if (!goingUp && step > 0) {
  //     throw new Error("Cannot use positive step for descending range");
  //   }

  if (start <= end) {
    step = Math.abs(step);
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else if (start > end) {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

console.log(range(1, 10));
console.log(range(1, 9, 2));
console.log(range(5, 2, -1));
console.log(range(5, 2));
console.log(range(10, 1, -2));

function sum(arr) {
  let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum;
}

console.log(sum(range(1, 10)));
