/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */

// eat, poop, toString as prototypes


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
 
Person.prototype.eat = function(edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function() {
  return this.stomach = [];
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
}

const natalie = new Person('Nat', 17);

console.log(natalie.toString());

natalie.eat('takis');
natalie.eat('goldfish');
natalie.eat('pickles');

console.log(natalie.stomach);

natalie.poop();

console.log(natalie.stomach);
 
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank = this.tank + gallons;
}

Car.prototype.drive = function(distance) {
  const driveableMiles = this.tank * this.milesPerGallon;
  if(distance <= driveableMiles) {
    this.odometer = this.odometer + distance;
    this.tank = this.tank - (distance / this.milesPerGallon);
  } else {
    this.odometer = this.odometer + driveableMiles;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles`;
  }
}

const littleRed = new Car('Honda Civic', 30);
console.log(littleRed);

littleRed.fill(14);
console.log(littleRed.tank);
console.log(littleRed.drive(400));
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age); // telling the baby who its parent is
  //special baby attribute gets assigned here
  this.favoriteToy = favoriteToy; 
}

Baby.prototype = Object.create(Person.prototype); // this tells the baby to inherit the person's methods
// any special methods that belong to the baby we write down here
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}

const baylie = new Baby('Baylie', 10, 'stuffed animals');

console.log(baylie.toString());
console.log(baylie.play());

  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. If the 'new' keyword is used when calling the function, 'this' inside the function is a brand new object.
    2. If 'apply', 'call', or 'bind' are used to call a function, 'this' inside the function is the object that's passed in as an argument
    3. If the function is called as a method -- that is, if dot notation is used to invoke the function -- 'this' is the object that the function is a property of. In other words, when a dot is to the left of a function invocation, 'this' is the object to th left of the dot.
    4. If the function is invoked as a FREE FUNCTION INVOCATION, meaning it was invoked without any of the conditions present above, 'this' is the global object. In a browser, it's called 'window'.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}