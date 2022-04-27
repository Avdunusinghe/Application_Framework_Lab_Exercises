function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(2);

//hapense 3 thing
// {} / this point / return Circle auto

//constructor function

function Person(age, height) {
  console.log("this", this);
  this.age = age;
  this.height = height;

  this.draw = function () {
    console.log("eating");
  };
}

const person = new Person(2, 3);
