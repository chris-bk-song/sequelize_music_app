'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    album_name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    ArtistId: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.Artist, {foreignKey: 'artist_id'});
    Album.hasMany(models.Track);
  };
  return Album;
};