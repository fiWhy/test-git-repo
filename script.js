// const Settings = (() => {
//   let instance;
//   const localCheck = Symbol();
//   function Constructor(check) {
//     if (check !== localCheck) throw new Error('Try another method');

//     this.width = Math.random() * 100;
//     this.height = Math.random() * 100;
//   }

//   Constructor.getInstance = () =>
//     instance ? instance : (instance = new Constructor(localCheck));

//   return Constructor;
// })();

// console.log(Settings.getInstance() === Settings.getInstance());

// const name = 'My games rating';
const s = 2;
const a = () => {
  s;
  // debugger;
  const b = 5;
  return () => {
    b;
    s;
    // debugger;
    return b;
  };
};

const res = a();

console.log(res());
console.log(res());
console.log(res());

const sum = (a, b) => a + b;

console.log(sum(1, 2));

const it = {
  tasks: [1, 2, 3],
  [Symbol.iterator]() {
    const copy = this.tasks.slice();
    return {
      next: () => {
        const value = copy.shift();
        debugger;
        return {
          value,
          done: !value,
        };
      },
    };
  },
};

const iterator = it[Symbol.iterator]();

console.log(iterator.next());
