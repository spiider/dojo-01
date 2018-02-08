/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Hero = Model.define('Hero', {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
  },

  type: {
    type: DataType.STRING(50),
  },

  links: {
    type: DataType.STRING(255),
  },

  name: {
    type: DataType.STRING(70),
  },

  slug: {
    type: DataType.STRING(70),
  },

  image_portrait: {
    type: DataType.STRING(255),
  },

  image_splash: {
    type: DataType.STRING(255),
  },

  image_card_background: {
    type: DataType.STRING(255),
  },
});

export default Hero;
