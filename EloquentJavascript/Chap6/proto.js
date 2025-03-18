// const protoRabbit = {
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   },
//   hop() {
//     console.log(`The ${this.type} rabbit hops!`);
//   },
// };

// //Create individual rabbits that inherit from protoRabbit
// const whiteRabbit = Object.create(protoRabbit);
// whiteRabbit.type = "white";

// const brownRabbit = Object.create(protoRabbit);
// brownRabbit.type = "brown";

// whiteRabbit.speak("hello!");
// brownRabbit.speak("hi");
// whiteRabbit.hop();

// let vehicle = {
//   start() {
//     console.log("Starting....");
//   },
//   stop() {
//     console.log("Stopping...");
//   },
// };

// let car = Object.create(vehicle);
// car.honk = function () {
//   console.log("Beep");
// };

// car.start();
// car.honk();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
//   speak() {
//     console.log(`${this.name} barks!`);
//   }
// }

// let rex = new Dog("Rex", "German Shepherd");
// rex.speak();

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     console.log(`The area is ${this.width * this.height}`);
//   }

//   perimeter() {
//     console.log(`The perimeter is ${2 * (this.width + this.height)}`);
//   }

//   isSquare() {
//     if (this.width === this.height) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
// }

// let rect = new Rectangle(5, 10);
// console.log(rect.area()); // Should print 50
// console.log(rect.perimeter()); // Should print 30
// console.log(rect.isSquare()); // Should print false

//understanding the chain
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} says woof!`);
  }
}

let max = new Dog("Max");
console.log(Object.getPrototypeOf(max) === Dog.prototype);
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);
