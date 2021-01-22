const { readJSON } = require('./utils');
const { join } = require('path');

const usersAddr = join(__dirname, './users.json');
const levelsAddr = join(__dirname, './levels.json');

// readJSON(usersAddr, (_, data) => {
//   readJSON(levelsAddr, (_, levels) => {
//     const users = data.map((user) => {
//       const level = levels.find((lvl) => lvl.value === user.level);
//       return { ...user, level };
//     });

//     console.log(users);
//   });
// });

readJSON(usersAddr, (_, data) => {
  const users = [...data];
  const lastUser = users[users.length - 1];
  const nextId = (lastUser?.id || 0) + 1;
  const newUser = {
    id: nextId,
    name: `User ${nextId}`,
    level: Math.ceil(Math.random() * 3),
  };
  const users = [...users, newUser];
});
