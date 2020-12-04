const recipe1 = {
  a: 2,
  b: 3,
  c: 4,
};

const recipe2 = {
  c: 4,
  a: 2,
  b: 3,
};

// [[c, 4]:0  [a, 2]:1  [b, 3]:2 ]
// [[a, 2]:0  [b, 3]:1  [c, 4]:2 ]

const toArray = (obj) => Object.entries(obj);
const checkQueueAndValue = (obj1, obj2) => {
  const obj2Array = toArray(obj2);
  return toArray(obj1).every(
    ([key, value], i) => obj2Array[i][0] === key && obj2Array[i][1] === value
  );
};

console.log(checkQueueAndValue(recipe1, recipe2));
