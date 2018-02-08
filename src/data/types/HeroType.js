import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLID as ID,
} from 'graphql';

const HeroType = new ObjectType({
  name: 'HeroItem',
  fields: {
    id: { type: new NonNull(ID) },
    type: { type: StringType },
    links: { type: StringType },
    name: { type: StringType },
    slug: { type: StringType },
    image_portrait: { type: StringType },
    image_splash: { type: StringType },
    image_card_background: { type: StringType },
  },
});

export default HeroType;
