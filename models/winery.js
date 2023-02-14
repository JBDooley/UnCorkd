module.exports = function (sequelize, DataTypes) {
    const Winery = sequelize.define(
      "Winery",
      {
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
    return Winery;
  };