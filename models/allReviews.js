module.exports = function (sequelize, DataTypes) {
    const allReviews = sequelize.define(
      "All_Reviews",
      {
        winery: {
          type: DataTypes.STRING,
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
        varietal: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1],
          },
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1],
          },
        },
        body: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            len: [1],
          },
        },
        rating: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1],
          },
        },
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
            len: [1],
          },
        },
      },
      {
        freezeTableName: true,
      }
    );
    return allReviews;
  };