// () - head -> eyes, nose, ears, mouth
//  | - neck
// /|\ - arms, core
//  /\ - legs

let id = 1;

const createMonster = (name, superPower) => ({
  id: id++,
  name,
  superPower,
});

const equip = {
  weapon: null,
  armor: null,
};

const ktulhu = createMonster('Ktulhu', 'Telekinesis'); // { id: 1, name: 'Ktulhu', superPower: 'Telekinesis}
const elder = createMonster('Elder', 'Intelligence');

const copy = (obj) => {
  return Object.assign({}, obj);
};

const setProperty = (obj, key, value) => ({
  ...obj,
  [key]: value,
});

const deleteProperty = (obj, key) => {
  const newObj = copy(obj);
  delete newObj[key];
  return newObj;
};

const copyOfKtulhu = copy(ktulhu);
const copyWithAdditionalProperty = deleteProperty(copyOfKtulhu, 'superPower');

// Immutability

console.log(copyOfKtulhu, copyWithAdditionalProperty);

const settings = {
  blood: true,
};

const hit = (settings) => {
  console.log('SMASH', settings.blood ? 'BLOOD' : '');
};

hit(settings);

const copyOfSettings = settings

settings.blood = false;

hit(copyOfSettings);
