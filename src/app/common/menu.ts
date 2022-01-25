export const menuArray = [
  { name: 'furusu-roll', price: '' },
  { name: 'sashimi-roll', price: '' },
  { name: 'sushi-et-sashimi', price: '' },
  { name: 'tacos-crevette-tempura', price: '' },
  { name: 'volcano', price: '' },
];

export const promotion = [
  {
    name: 'pizza-sushi',
    place: 'promo',
  },
  {
    name: 'sushi-tower',
    place: 'promo',
  },
];

export const formatName = (name: any) => {
  name[0] = name[0].toLocaleUpperCase();
  return name.replace('-', ' ');
};

export const comboArray = [
  {
    name: '2x16mcx',
    place: 'special',
    price: '21.99',
  },
  {
    name: '2x28mcx',
    place: 'special',
    price: '41.99',
  },
  {
    name: 'fujiroll',
    place: 'special',
  },
];

export const sidemage = [
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
];
