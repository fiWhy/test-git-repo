const obj = {
  a: {
    b: {
      c: {
        d: 5,
      },
    },
  },
  b: 8,
  c: 10,
};

const copy = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === 'object' && typeof obj[key] !== null
          ? copy(obj[key])
          : obj[key];
    }
  }
  return newObj;
};

const get = (value, strPath) => {
  if (!strPath || !strPath.length || value === null || value === undefined)
    return value;

  const path = Array.isArray(strPath) ? [...strPath] : strPath.split('.');
  const step = path.shift();

  return get(value[step], path);
};

console.log(get(obj, ['a', 'b', 'c', 'd'])); // 5;
console.log(get(obj, 'a.b.c.f')); // undefined;
console.log(get(obj, 'a.e.c.f')); // undefined;
