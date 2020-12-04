const ingridientsList = {
  empty: '',
  cheese: 'cheese',
  lemon: 'lemon',
  nail: 'nail',
  feet: 'feet',
};

const kettle = {
  ingridient1: ingridientsList.empty,
  ingridient2: ingridientsList.empty,
  ingridient3: ingridientsList.empty,
  ingridient4: ingridientsList.empty,
  cookTheSpell() {
    // _this = this
    const fnc = () => {
      console.log(this); // console.log(_this)
    };

    fnc();
  },
  canBeCooked(spell) {
    for (const key in spell) {
      if (this[key] !== spell[key]) return false;
    }
    return true;
  },
};

const lightningSpell = {
  ingridient1: ingridientsList.cheese,
  ingridient2: ingridientsList.empty,
  ingridient3: ingridientsList.nail,
  ingridient4: ingridientsList.empty,
};

const fireballSpell = {
  ingridient1: ingridientsList.cheese,
  ingridient2: ingridientsList.nail,
  ingridient3: ingridientsList.empty,
  ingridient4: ingridientsList.feet,
};

kettle.ingridient1 = ingridientsList.cheese;
kettle.ingridient3 = ingridientsList.nail;

kettle.cookTheSpell();
