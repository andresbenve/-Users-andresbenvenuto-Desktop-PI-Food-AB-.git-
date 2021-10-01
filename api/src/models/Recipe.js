const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.DOUBLE,
      //type: DataTypes.UUID,
      //defaultValue: DataTypes.UUIDV1,
      // fix
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    spoonacularScore: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    healthScore: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    analyzedInstructions: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dishTypes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    dieta: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  });
};
