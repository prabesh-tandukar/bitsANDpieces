function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find((c) => c.name == name);
    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return counts;
}

//simple example: count the each number occurance
let numbers = [1, 2, 3, 4, 3, 2, 2, 3, 4, 1, 1, 1, 1, 3, 4, 3, 2];

let result = countBy(numbers, (num) => num);

console.log(result);
