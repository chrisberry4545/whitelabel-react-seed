// file inversify.config.ts

import { Container } from 'inversify';
import { TYPES } from './types';

import {
  ThrowableWeapon,
  Warrior,
  Weapon,
} from './interfaces';

import { Katana, Ninja, Shuriken } from './entities';

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };
