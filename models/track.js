'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    TrackName: DataTypes.STRING,
    TrackDuration: DataTypes.INTEGER,
    AlbumId: DataTypes.INTEGER
  }, {});
  Track.associate = function(models) {
    Track.belongsTo(models.Album);
  };
  return Track;
};