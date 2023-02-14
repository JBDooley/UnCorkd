module.exports = function (sequelize, DataTypes) {
    const Varietal = sequelize.define(
      "Varietal",
      {
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