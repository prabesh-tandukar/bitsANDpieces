const protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
  hop() {
    console.log(`The ${this.type} rabbit hops!`);
  },
};

//Create individual rabbits that inherit from protoRabbit
const whiteRabbit = Object.create(protoRabbit);
whiteRabbit.type = "white";

const brownRabbit = Object.create(protoRabbit);
brownRabbit.type = "brown";

whiteRabbit.speak("hello!");
brownRabbit.speak("hi");
whiteRabbit.hop();
