module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define(
      "User",
      {
        user_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1],
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
      },
      {
        freezeTableName: true,
      }
    );
  
    User.associate = function (models) {
      User.hasMany(models.Review, {
        onDelete: "cascade",
      });
    };
    return User;
  };