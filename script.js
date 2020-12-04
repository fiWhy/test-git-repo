/**
 * call
 * apply
 * bind
 */

const increaseSalary = function (by) {
  this.salary += by;
};

function User(name, language, exp) {
  this.name = name;
  this.language = language;
  this.tasks = 0;
  this.exp = exp || 0;
  this.salary = (this.exp + 1) * 100;

  this.increaseSalary = (by) => {
    this.salary += by;
  };

  // this.increaseSalary = function (by) {
  //   this.salary += by;
  // }.bind(this);
}

const vasya = new User('Vasya', 'JavaScript');
const petya = new User('Patya', 'JavaScript');

// petya.increaseSalary.call(vasya, 200);
// increaseSalary.apply(vasya, [200]);

// const fnc = increaseSalary.bind(vasya);

// petya.increaseSalary = vasya.increaseSalary;
// petya.increaseSalary = fnc.bind(petya);

petya.increaseSalary.call(vasya, 200);

console.log(vasya, petya);
