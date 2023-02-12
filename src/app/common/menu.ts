export const menuArray = [
  { name: 'furusu-roll', price: '' },
  { name: 'sashimi-roll', price: '' },
  { name: 'sushi-et-sashimi', price: '' },
  { name: 'tacos-crevette-tempura', price: '' },
  { name: 'volcano', price: '' },
];

export const promotion = [
  {
    name: 'Mercredi-Pizza-Sushi',
    place: 'promo',
    price: '6.99',
  },
  {
    name: 'Saumon-Katsu',
    place: 'promo',
    price: '12.95',
  },
  {
    name: '2x16mcx',
    place: 'special',
    price: '22.95',
  },
  {
    name: '2x28mcx',
    place: 'special',
    price: '45.99',
    subInfo: 'tous les lundis et mardis'
  },
  {
    name: 'pizza-sushi',
    place: 'promo',
  },
  {
    name: 'sushi-tower',
    place: 'promo',
  },
  {
    name: 'Bento-Chicken-Katsu',
    place: 'promo',
  }
];

export const formatName = (name: any) => {
  name[0] = name[0].toLocaleUpperCase();
  console.log( name.replace('-', ' '));
  return name.replace('-', ' ');
};

export const comboArray = [
  {
    name: 'assiettes-assorties',
    place: 'special',
  },
  {
    name: 'Bento-Chicken-Katsu',
    place: 'promo',
  },
];

export const sidemage = [
  {
    name: 'image',
    place: 'special',
  },
  {
    name: 'fujiroll',
    place: 'special',
  },
  {
    name: 'combo1',
    place: 'special',
  },

  {
    name: 'combo4',
    place: 'special',
  },

  {
    name: 'combo2',
    place: 'special',
  },

  {
    name: 'combo3',
    place: 'special',
  },
  {
    name: 'combo5',
    place: 'special',
  },
  {
    name: 'combo6',
    place: 'special',
  },
  {
    name: 'combo7',
    place: 'special',
  },
  {
    name: 'shrim',
    place: 'special',
  },
  {
    name: 'image2',
    place: 'special',
  },
];

export const nameFormat = (name: string | undefined) => {
  if(typeof name === 'string'){
    let newName: string[] = name.split('-');
    for(let i = 0; i< newName.length; i++){
      if(i === 0 ) {
        newName[i] = newName[i].charAt(0).toUpperCase() + newName[i].slice(1);
      }
      else {
        newName[i] =newName[i].charAt(0).toLowerCase() + newName[i].slice(1);
      }

    }
    return newName.join(' ');
  }
  return '';

};
