module.exports = function (sequelize, DataTypes) {
    let Winery = sequelize.define(
      "Winery",
      {
        id: {
          type: DataTypes.Int,
          allowNull: false,
          validate: {
            len: [1],
          },
        },
  
        winery_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1],
          },
        },
      },
      {
        freezeTableName: true,
      }
    );
    return Review;
  };