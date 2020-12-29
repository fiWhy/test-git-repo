const sum = (...numbers) =>
  !numbers.length ? 0 : numbers[0] + sum(...numbers.slice(1));

/**
 * <- 1 + sum([2,3,4]) // 1 + 9 ->
 * <- 2 + sum([3,4]) // 2 + 7  ->
 * <- 3 + sum([4]) // 3 + 4 ->
 * <- 4 + sum([]) // 4 + 0 ->
 * <- 0
 *
 */

let lastActiveDate = new Date();

window.addEventListener('mousemove', () => {
  lastActiveDate = new Date();
});

//

const timer = (cb, timeout) => {
  let timerId = setTimeout(function tick() {
    cb();
    timerId = setTimeout(tick, timeout);
  }, timeout);

  return () => clearTimeout(timerId);
};

const stopTimer = timer(() => {
  const diff = new Date() - lastActiveDate;

  if (diff > 2 * 1000) {
    console.log('AFK');
  }
}, 1000);

const pow = (n, p) => {
  for (let i = 1, v = n; i < p; i++) {
    n *= v;
  }
  return n;
};

const recurrPow = (n, p) => {
  if (!p) return 1;
  return n * recurrPow(n, p - 1);
};

const obj = {
  a: 2,
  b: {
    c: 4,
    d: {
      e: 5,
      f: {
        g: 6,
      },
    },
  },
};

const newObj = {
  ...obj,
};

newObj.b.c = 6;

console.log(obj.b.c);
