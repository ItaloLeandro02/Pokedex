import {
  ColorLess,
  Darkness,
  Dragon,
  Fairy,
  Fighting,
  Fire,
  Grass,
  Lightning,
  Metal,
  Psychic,
  Water,
} from '../assets/Images';

const icons = [
  { name: 'Colorless', icon: ColorLess },
  { name: 'Darkness', icon: Darkness },
  { name: 'Dragon', icon: Dragon },
  { name: 'Fairy', icon: Fairy },
  { name: 'Fighting', icon: Fighting },
  { name: 'Fire', icon: Fire },
  { name: 'Grass', icon: Grass },
  { name: 'Lightning', icon: Lightning },
  { name: 'Metal', icon: Metal },
  { name: 'Psychic', icon: Psychic },
  { name: 'Water', icon: Water },
];

export const ReturnIconCost = cost => {
  return icons.find(x => x.name === cost).icon;
};
