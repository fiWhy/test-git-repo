const arr = [1, 2, 3];
const obj = {
  tasks: [],
  [Symbol.iterator]() {
    const values = [...this.tasks];
    return {
      next() {
        const done = !values.length;
        const nextValue = values.shift();
        return {
          value: !done? nextValue(): undefined,
          done,
        };
      },
    };
  },
};

obj.tasks.push(() => 'abc');
obj.tasks.push(() => 'asdssg');
obj.tasks.push(() => 'asfgfgbc');
obj.tasks.push(() => 'agsdfgfbc');
obj.tasks.push(() => 'abdfdsfsc');

// for (let v of obj) {
//   console.log(v);
// }

const objectInterator = obj[Symbol.iterator]();

console.log(objectInterator.next());
console.log(objectInterator.next());
console.log(objectInterator.next());
console.log(objectInterator.next());
console.log(objectInterator.next());
console.log(objectInterator.next());
console.log(objectInterator.next());
console.log(objectInterator.next());

// const iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
