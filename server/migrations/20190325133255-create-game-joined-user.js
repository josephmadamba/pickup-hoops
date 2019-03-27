"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("GameJoinedUsers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: "CASCADE",
      onDelete: "CASCADE"
      },
      game_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Games",
          key: "id"
        },
        onUpdate: "CASCADE",
      onDelete: "CASCADE"
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("GameJoinedUsers");
  }
};
