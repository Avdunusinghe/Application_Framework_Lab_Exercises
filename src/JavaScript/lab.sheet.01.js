/*
 *Question 01
 *Create a function as a variable (function expression) that prints ‘Hello World’ to console and another
 *function that accepts a variable. The argument passed to the second the function should be executed as a
 *function inside the body. Call the second function passing the first function as the argument. Check the output.
 */

function printHelloWorld() {

  console.log("hellow World");

}

var printHello = function () {

  console.log("Hellow World");

};

function printer(func) {

  func();

}

printer(printHello);

/*2. Use curly brackets to create JSON like JavaScript object and add properties and functions to the object*/

var person = {

    name:"Ashen",
    age:21,
    printName:function(){

      console.log(this.name);

    }
};

person.printName();

/*3. Understand the ‘this’ keyword in JavaScript.
d. Execute the printVehicleName function and the getVehicleName functions to see the results.
e. Correct the getVehicleName to print out the global variable vehicleName using the this keyword*/
/*a. Declare a global variable named vehicleName in the window object.*/
/*c. Declare an object named Vehicle(using object literal notation) which have a variable called vehicleName and declare a function named getVehicleName and assign it with the printVehicleName.*/
/*b. Declare a method named printVehicleName to print out the vehicle name.*/

var vehicleName = "Audi";

var car = {

  vehicleName:"BMW",
  printName:function () {

      return function(){

        console.log(this.vehicleName);

      }
    
  }
}

function printVehicleName(){

  console.log(window.vehicleName);

}

printVehicleName();

var execute = car.printName();

execute = execute.bind(car);

execute();

/*Create a separate function using JavaScript closure which accepts the tax percentage 
and returns a function that accepts the amount and returns the amount after adding tax percentage. 
Try adding tax percentage to ‘this’ object and check if it works.*/


function taxCalculator(percentage) {

  return function(amount) {
    
     console.log(amount * percentage);
  }
  
}

var calculator = taxCalculator(.12);

console.log(calculator(200));

/*Write a function to call JSON Placeholder API (https://jsonplaceholder.typicode.com/posts) and get users and return the users to the caller.*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(function(response){
  return response.json();
}).then(function (data){
  console.log(data);
})