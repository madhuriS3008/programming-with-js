// Task 1
let dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (const prod of dairy) {
    console.log(prod);
  }
}

logDairy();

// Task 2
const animal = { canJump: true };

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (const prop of Object.keys(bird)) {
    console.log(`${prop} : ${bird[prop]}`);
  }
}

birdCan();

// Task 3
function animalCan() {
  for (prop in bird) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

animalCan();
