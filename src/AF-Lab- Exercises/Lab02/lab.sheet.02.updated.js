function getValue(callback) {
  let value = 0;

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      value = 10;
      //this is the anonymous function defined in line number 18
      resolve(value);
    }, 1000);
  });
}

function getNewValue(value, callback) {
  setTimeout(function () {
    //this is the anonymous function defined in line number 20
    callback(callback * 100);
  }, 1000);
}

//calling the function defined at line number 1
getValue(function (value) {
  //calling the function defined at line number 20
  getNewValue(value, function (newValue) {
    console.log(newValue);
  });
});

//04
async function println() {
  const values = await getValue();
  console.log(values);
}
//02
function Vehicle(type) {
  this.type = type;
  Vehicle.VehicleCount++;
}

Vehicle.prototype.print = function () {
  console.log("Vehicle is Driving");
};

Vehicle.prototype.VehicleCount = 0;
let v1 = new Vehicle("Toyota");

v1.print();

console.log(v1.VehicleCount);

function Car() {
  Vehicle.call(this, type);
}

Car.prototype.balancedWheel = function () {
  console.log("Wheels are balanced");
};

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let c1 = new Car(1);
c1.balancedWheel();
