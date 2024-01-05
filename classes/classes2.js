// using class instance as another class's constructor's property
class StationaryBike {
  constructor(position, gears) {
    this.position = position;
    this.gears = gears;
  }
}
class Treadmill {
  constructor(position, modes) {
    this.position = position;
    this.modes = modes;
  }
}
class Gym {
  constructor(openHrs, stationaryBikePos, tradmillPos) {
    this.openHrs = openHrs;
    this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
    this.treadmill = new Treadmill(tradmillPos, 4);
  }
}

let boxingGym = new Gym("7-22", "right corner", "left corner");
console.log(boxingGym.openHrs);
console.log(boxingGym.stationaryBike);
console.log(boxingGym.treadmill);
console.log(boxingGym);
