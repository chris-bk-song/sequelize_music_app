'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    ArtistName: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
    Artist.hasMany(models.Album);
  };
  return Artist;
};