// Animal class
class Animal {
  constructor(color = "yellow", energy = 100) {
    this.color = color;
    this.energy = energy;
  }
  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log("Energy is now ", this.energy);
    } else this.sleep();
  }
  sleep() {
    this.energy += 20;
    console.log("Energy is increasing. Currently at:", this.energy);
  }
  getColor() {
    console.log("Color: ", this.color);
  }
}
// Inheritance
class Cat extends Animal {
  constructor(
    sound = "purr",
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }
  makeSound() {
    console.log("Cat sound:", this.sound);
  }
}
class Bird extends Animal {
  constructor(sound = "chirp", canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log("Bird sound:", this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = "meow",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }
  makeSound(option = true) {
    if (option) super.makeSound();
    console.log("House Cat sound:", this.houseCatSound);
  }
}

class Tiger extends Cat {
  constructor(
    tigerSound = "roar!",
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }
  makeSound(option = true) {
    if (option) super.makeSound();
    console.log("Tiger sound:", this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option = true) {
    if (option) super.makeSound();
    if (this.canTalk) console.log("Parrot can talk.");
  }
}

let polly = new Parrot(true); // talking parrot
let fuji = new Parrot(false);
polly.makeSound();
fuji.makeSound();
console.log("Color:", polly.color);
console.log("Energy:", polly.energy);
polly.isActive();

let penguin = new Bird("shriek", false, "black and white", 200);
console.log(penguin);
console.log(penguin.sound);
console.log(penguin.color);
console.log(penguin.canFly);
console.log(penguin.energy);
penguin.isActive();

let leo = new HouseCat();
leo.makeSound(false);
leo.makeSound();

let lark = new Tiger();
lark.makeSound();
lark.makeSound(false);

//practice problem
class Animal {}

class Dog extends Animal {
  constructor() {
    super();
    this.noise = "bark";
  }

  makeNoise() {
    return this.noise;
  }
}

class Wolf extends Dog {
  constructor() {
    super();
    this.noise = "growl";
  }
}

var result = new Wolf();
console.log(result.makeNoise());
