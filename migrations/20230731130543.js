'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('author', {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
      },
      bio:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });

    await queryInterface.createTable('blog', {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      category:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      short_description:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      authorId:{
        type:DataTypes.INTEGER,
        allowNull:false,
          referrences:{
            model:'author',
            key:'id'
          }
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('author');
    await queryInterface.dropTable('blog');
  }
};