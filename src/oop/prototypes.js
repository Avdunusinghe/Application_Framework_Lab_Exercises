function Circle(radius) {
  this.radius = radius;

  this.move = function () {
    console.log("move");
  };
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const circle = new Circle(2);

//Returns instance members
console.log(Object.keys(circle));
console.log("================================================================");
for (let key in circle) console.log(key);

let person = { name: "Mosh" };

for (let key in person) {
  //console.log(key);
}

//console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
