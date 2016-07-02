"use strict";

module.exports = function(sequelize, DataTypes) {
  var Lecture = sequelize.define("Lecture", {
    date: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        Lecture.hasMany(models.Note);
      }
  }
  });

  return Lecture;
};