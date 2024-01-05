let bird = {
  hasWings: true,
  hasFeathers: true,
  canFly: true,
};

let eagle = Object.create(bird);
console.log(eagle);
console.log("Eagle has wings: ", eagle.hasWings);
console.log("Eagle has feathers: ", eagle.hasFeathers);
console.log("Eagle can fly: ", eagle.canFly);
console.log(eagle);

let penguin = Object.create(bird);
console.log(penguin);
penguin.canFly = false;
console.log(penguin);
console.log("Penguin has wings: ", penguin.hasWings);
console.log("Penguin can fly: ", penguin.canFly);
