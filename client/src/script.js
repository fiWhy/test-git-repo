import { last, random } from 'lodash';

const getUsers = () => fetch('http://localhost:3000/get');
const addUser = (body) =>
  fetch('http://localhost:3000/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
const getJsonFromResponse = (response) => response.json();

getUsers().then(getJsonFromResponse).then(last);
//   .then((user) =>
//     addUser({
//       name: user.name + 1,
//       level: random(0, 3),
//     })
//   )
//   .then(console.log);
