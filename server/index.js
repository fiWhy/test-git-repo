const { readJSON } = require('./utils');
const { join } = require('path');

const usersAddr = join(__dirname, './users.json');
const levelsAddr = join(__dirname, './levels.json');

readJSON(usersAddr, (_, data) => {
  readJSON(levelsAddr, (_, levels) => {
    const users = data.map((user) => {
      const level = levels.find((lvl) => lvl.value === user.level);
      return { ...user, level };
    });

    console.log(users);
  });
});
