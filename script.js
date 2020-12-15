const log = (data) => console.log(data);

function User(name, salary, language) {
  this.name = name;
  this.language = language;
  this.online = true;
  this.salary = salary;
}

User.prototype.increaseSalary = function () {
  this.salary += 100;
};

User.prototype.toggleOnline = function () {
  this.online = !this.online;
};

const users = [
  {
    name: 'Vasya',
    salary: 1000,
  },
  {
    name: 'Petya',
    salary: 1000,
  },
  {
    name: 'Grigory',
    salary: 1000,
  },
];

const map = (arr, cb) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
};

const filter = (arr, cb) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (cb(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

const arrOfUsers = map(users, (data) => new User(data.name, data.salary));
const arrOfNumbers = map([1, 2, 3, 4, 'abc', 1, 3], Number);
// const anotherArrayOfUsers = users.map(
//   (data) => new User(data.name, data.salary)
// );
const anotherFilteredElements = arrOfNumbers.filter(
  (element) => !Number.isNaN(element)
);
// console.log(filter(arrOfNumbers, (element) => !Number.isNaN(element)));

console.log(anotherFilteredElements);

// map([1,2,3, '2'], Number) -> [1,2,3,2]
// fnc([1,2,3, 'abc']) -> [1,2,3]

const mappedUsers = users.map(
  (user) => new User(user.name, user.salary, 'JavaScript')
);

mappedUsers[0].increaseSalary();
mappedUsers[2].increaseSalary();

console.log(mappedUsers.filter((user) => user.salary > 1000));
