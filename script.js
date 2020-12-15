// string                   number            boolean                 {}
// String                   Number            Boolean                 Object
// 'string'.                (2).              true.                   {}.a = 2
// new String('string')     new Number(2)     new Boolean(true) ->    { a: 2 }
// own -> Object            own -> Object     own -> Object           Object
// 'string' <- new String   2 <- new Number   true <- new Boolean     {}
//                                                                    {a:2}.a -> 2

const obj = {
  b: 2,
  c: 3,
  d: 4,
};

const newArr = Array(10).fill(obj);

// const arr = [1, 2, 3];
// arr.push(4, 5, 6, 7,  8);

// [obj x 10]
// [obj x 10]

// (arrCopy[5]).b = '3443';
// obj.b = '3443'

const arrCopy = newArr.slice();

console.log(newArr[5] === arrCopy[5]);

arrCopy[5].b = 'abc';

console.log(obj.b);
