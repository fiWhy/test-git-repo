const character = {
  name: 'Witch', // 1
  key: 'adsad', // 2
  anotherKey: null,
};

const getObjectStringsLength = (object) => {
  let length = 0;
  for (const key in object) {
    const value = object[key];
    if (typeof value !== 'string') continue;
    length += value.length;
  }
  return length;
};

const copyPartial = (object) => {
  const newObject = {};
  for (const key in object) {
    newObject[key] = null;
  }
  return newObject;
};

const valueLength = (value) => {
  switch (typeof value) {
    case 'string':
      return value.length;
    case 'boolean':
      return Number(value);
    case 'function':
      return 0;
    default:
      return value;
  }
};

const copyWithNumericValues = (object) => {
  const newObject = {};
  for (const key in object) {
    newObject[key] = valueLength(object[key]);
  }
  return newObject;
};

// [['name', 'Witch'], ['key', 'asdasd'], ['anotherKey', null]]
const oneLine = (object) =>
  Object.entries(object).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: valueLength(value),
    }),
    {}
  );

const numericValues = oneLine(character);

console.log(numericValues);
