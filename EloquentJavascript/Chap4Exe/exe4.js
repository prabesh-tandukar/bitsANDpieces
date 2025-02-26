// Deep comparison
// The == operator compares objects by identity, but sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (using the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

// // Your code here.

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true

function deepEqual(value1, value2) {
  console.log("Comparing:", value1, value2);
  if (value1 === value2) {
    return true;
  }

  if (
    value1 === null ||
    value2 === null ||
    typeof value1 !== "object" ||
    typeof value2 !== "object"
  ) {
    return false;
  }

  let key1 = Object.keys(value1);
  let key2 = Object.keys(value2);

  console.log("Keys:", key1, key2);

  if (key1.length !== key2.length) {
    return false;
  }

  return key1.every(
    (key) => key2.includes(key) && deepEqual(value1[key], value2[key])
  );
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
