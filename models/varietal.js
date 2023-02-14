module.exports = function (sequelize, DataTypes) {
    let Varietal = sequelize.define(
      "Varietal",
      {
        id: {
          type: DataTypes.Int,
          allowNull: false,
          validate: {
            len: [1],
          },
        },
  
        varietal: {
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
    return Varietal;
  };