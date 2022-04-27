function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(2);

// Factory Function

function createPerson(age, height) {
  return {
    age,
    height,
    eat: function () {
      console.log("eating");
    },
  };
}

//call this function

const person = createPerson(2, 4);
person.eat();
