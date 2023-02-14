module.exports = function (sequelize, DataTypes) {
    const Vintage = sequelize.define(
      "Vintage",
      {
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