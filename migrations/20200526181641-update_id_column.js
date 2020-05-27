'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Tracks', 'AlbumId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'Albums', // name of Target model
        key: 'id', // key in Target model
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Tracks', 'AlbumId', {
      type: Sequelize.DataTypes.INTEGER,
    });
  }
};
