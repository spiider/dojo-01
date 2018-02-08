import { GraphQLList as List } from 'graphql';
import HeroType from '../types/HeroType';

const hero = {
  type: new List(HeroType),
  resolve(parent, arts, { db }) {
    return db.findAll().then(heroList => heroList);
  },
};

export default hero;
