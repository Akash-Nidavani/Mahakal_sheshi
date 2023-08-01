'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {
      Blog.belongsTo(models.author,{
        as:'blogs_author',
        foreignKey: 'authorId'
      });
    }
  }
  Blog.init({
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
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    short_description:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    content:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:true
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
  }, {
    sequelize,
    modelName: 'blog',
    tableName:'blog'
  });
  return Blog;
};