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
  TASK 1 jim
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

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10) {
    this.stomach.push(edible)
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

// create my objects
const cam = new Person('Cam', 20);
const spencer = new Person('Spencer', 28);

//eat
spencer.eat('pizza');
spencer.eat('tacos');
spencer.eat('sandwich');
spencer.eat('bento');
spencer.eat('cake');

console.log(spencer.stomach);

spencer.poop();

console.log(spencer.stomach);

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
Car.prototype.drive = function(distance){
  this.odometer = this.odometer + distance;
  this.tank = this.tank - distance/this.milesPerGallon;
  if (this.tank <= 0) {
    return `I ran out of fuel at ${this.odometer} miles`;
  }
}
const toyota = new Car('Toyota', 20);
toyota.fill(10);
console.log('Task 2 tank before drive: ', toyota.tank);
toyota.drive(100);
console.log('Task 2 drive: ', toyota.odometer);
console.log('Task 2 after drive: ', toyota.tank);
console.log('Drive too far: ', toyota.drive(120)); // this isn't quite right since it should stop driving at zero but moving on for now


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
}
const nugget = new Baby('Chonker', 2, 'Xylophone');
console.log('Task 3 baby play: ', nugget.play());


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. window binding - if no other rules apply, the 'this' keyword will attach to the 'window' in the browser or the global object in node, we always want to avoid this
  2. implicit binding - most common rule, when the function (an object method) is invoked the this keyword will attach itself to whatever is left of the period
  3. new binding - when you invoke a constructor function using the new keyword 'this' applies to your new object
  4. explicit binding - when you invoke a function with .call .apply or .bind and explicitly identify the object that you want 'this' to apply to Pet.call(myObj)
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}