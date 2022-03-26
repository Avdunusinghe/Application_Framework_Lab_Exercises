class User {
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

getUserData();
