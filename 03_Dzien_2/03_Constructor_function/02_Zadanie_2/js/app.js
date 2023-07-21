const Robot = function (name) {
  this.name = name;
  this.isFunctional = false;
};

Robot.prototype.sayHi = function (toWho) {
  if (this.isFunctional === true) {
    console.log("Robot " + this.name + " greets " + toWho);
  } else {
    console.log("Robot " + this.name + " is broken");
  }
};

Robot.prototype.changeName = function (newName) {
  console.log("Robot " + this.name + " changes name to " + newName);
  this.name = newName;
};

Robot.prototype.fixIt = function () {
  this.isFunctional = true;
  console.log("Robot " + this.name + " was fixed");
};


const s = new Robot('Sophia');
s.sayHi('R2D2');
s.fixIt();
s.sayHi('R2D2');
s.changeName('Roman');