'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Albums', 'ArtistId', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'Artists', // name of Target model
        key: 'id', // key in Target model
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Albums', 'ArtistId');
  }
};
