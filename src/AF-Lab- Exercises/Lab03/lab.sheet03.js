/*class User {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

function getUserData() {
  
  const data = document.getElementById("myInput").value;
  var user1 = new User(data, "dev");

  console.log(user1.name);
}

getUserData();*/

/*setTimeout(function () {
  console.log("One");
}, 1000);

console.log("Two");
*/

/*function add(a, b) {
  return a + b;
}

console.log(add(3, 4, 5));*/
class ClassWithStaticMethod {
  static staticProperty = "someValue";
  static staticMethod() {
    return "static method has been called.";
  }
  static {
    console.log("Class static initialization block called");
  }
}

console.log(ClassWithStaticMethod.staticProperty);
// output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
