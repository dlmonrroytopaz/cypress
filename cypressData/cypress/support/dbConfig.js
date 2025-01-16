// Test/cypress/dbConfig.js
const sqlServer = require('cypress-sql-server');
 
// Database configuration for SQL Server
const dbConfig = {
  server: 'TOPSERVER44', // Reemplaza con tu servidor SQL
  authentication: {
    type: 'default',
    options: {
      userName: 'desa', // Reemplaza con tu nombre de usuario
      password: 'desa', // Reemplaza con tu contraseña
    },
  },
  options: {
    database: 'CREDINKA_TESTING', // Reemplaza con tu base de datos
    encrypt: true, // Cambia esto si no usas cifrado
    trustServerCertificate: true, // Aceptar certificados autofirmados
  },
};
 
module.exports = dbConfig;