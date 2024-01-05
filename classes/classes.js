//creating class
class Train {
  constructor(color, lightsOn) {
    //sets up instance specific values(data) at ht time of object instantiation
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    let proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}
// instance of train class
let train = new Train("red", false);
console.log(train);
train.toggleLights();
train.lightsStatus();
train.getSelf();
train.getPrototype();

// inheritance from Train base-class
class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn); //properties from super-class to sub-class or base-class
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High Speed Status: ", this.highSpeedOn);
  }
  toggleLights() {
    //polymorphism
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights 100% operational.");
  }
}

let highSpeedTrain = new HighSpeedTrain(200, false, "blue", true);
console.log(highSpeedTrain);
highSpeedTrain.toggleHighSpeed();
highSpeedTrain.toggleLights();
highSpeedTrain.getSelf();
highSpeedTrain.getPrototype();

train.getPrototype();
