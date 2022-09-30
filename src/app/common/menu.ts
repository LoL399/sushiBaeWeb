export const menuArray = [
  { name: 'furusu-roll', price: '' },
  { name: 'sashimi-roll', price: '' },
  { name: 'sushi-et-sashimi', price: '' },
  { name: 'tacos-crevette-tempura', price: '' },
  { name: 'volcano', price: '' },
];

export const promotion = [
  {
    name: 'Saumon-Katsu-nouveau',
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
    price: '44.99',
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
  },
  {
    name: 'Rouleau-Crevette-Épicé',
    place: 'promo',
  },
];

export const formatName = (name: any) => {
  name[0] = name[0].toLocaleUpperCase();
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

export const nameFormat = (name: any) => {
  let newName: string = (' ' + name).slice(1);
  return (newName.charAt(0).toUpperCase() + newName.slice(1)).replace('-', ' ');
};
