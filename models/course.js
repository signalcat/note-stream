"use strict";

module.exports = function(sequelize, DataTypes) {
  var Course = sequelize.define("Course", {
    title: DataTypes.STRING,
    catalog_id: DataTypes.STRING,
    description: DataTypes.STRING,
    semester: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Course.hasMany(models.Lecture, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Course;
};
