// Test/cypress/plugins/index.js
const { defineConfig } = require('cypress');
const sqlServer = require('cypress-sql-server');
const nodemailer = require('nodemailer');

// Cargar dotenv para usar las variables de entorno
require('dotenv').config();

module.exports = (on, config) => {
  // Cargar el plugin de SQL Server
  sqlServer.loadDBPlugin(on);

  // Definir tareas
  on('task', {
    queryDb(query) {
      return new Promise((resolve, reject) => {
        const dbConfig = {
          server: 'TOPSERVER44', // Reemplazar con tu servidor SQL
          authentication: {
            type: 'default',
            options: {
              userName: 'desa', // Reemplazar con tu nombre de usuario
              password: 'desa', // Reemplazar con tu contraseña
            },
          },
          options: {
            database: 'CREDINKA_TESTING', // Reemplazar con tu base de datos
            encrypt: true, // Cambiar si no utilizas encriptación
          },
        };

        sqlServer.query(dbConfig, query)
          .then(resolve)
          .catch(reject);
      });
    },

    sendEmail({ subject, text }) {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "mandalorianregresion@gmail.com",
          pass: "abgehykyeahfgoxo", // Asegúrate de proteger esta contraseña
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      let mailOptions = {
        from: "mandalorianregresion@gmail.com",
        to: 'idarosa@topazevolution.com',
        subject: subject,
        text: text,
      };

      return transporter.sendMail(mailOptions)
        .then(info => {
          console.log('Correo enviado: ' + info.response);
          return { success: true, response: info.response };
        })
        .catch(error => {
          console.error('Error al enviar el correo:', error);
          return { success: false, error };
        });
    }
  });

  // Cargar variables de entorno desde .env
  config.env.API_URL = process.env.CYPRESS_API_URL;
  config.env.API_KEY = process.env.CYPRESS_API_KEY;

  return config; // Retornar la configuración modificada
};