function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  Shape.call(this, color);
  this.radius = radius;
}

/*Circle.prototype = Object.create(Object.prototype);
Circle.prototype = Object.create(Shape.prototype);*/

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("duplicate Circle");
};

function Square() {}

extend(Square, Shape);
const s = new Shape();
const c = new Circle(1, "red");

const shapes = [new Circle(), new Square()];

for (let Shape of shapes) {
  Shape.duplicate();
}
