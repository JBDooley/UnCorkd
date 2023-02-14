module.exports = function (sequelize, DataTypes) {
    let Vintage = sequelize.define(
      "Vintage",
      {
        id: {
          type: DataTypes.Int,
          allowNull: false,
          validate: {
            len: [1],
          },
        },
  
        vintage: {
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
    return Vintage;
  };