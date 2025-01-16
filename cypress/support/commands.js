// En support/commands.js
//Comando para pruebas
Cypress.Commands.add('testCommand', () => {
  cy.log('Test command executed');
});

// Comando Allure - configuración reporte
//Cypress.Commands.add('logReportData', (feature, story) => {
 // cy.allure().feature(feature);
 // cy.allure().story(story);
//});

// Comando Axios - TOKEN
import axios from 'axios';

// Comando para hacer login y guardar el token en localStorage
Cypress.Commands.add('login', () => {
  const credentials = {
    username: 'demo',  // Usuario ficticio
    password: 'password',  // Contraseña ficticia
  };

  return cy.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',  // URL de ejemplo
    body: credentials,  // Usamos un cuerpo de ejemplo para simular autenticación
    failOnStatusCode: false  // No fallar si el código de estado es 401
  }).then((response) => {
    const token = 'fake-token-123456789';  // Este token sería real en un entorno real
    window.localStorage.setItem('auth_token', token);  // Guardamos el token en localStorage
  });
});

// Comando para obtener datos protegidos usando el token
Cypress.Commands.add('getProtectedData', () => {
  const token = window.localStorage.getItem('auth_token');  // Leemos el token del localStorage
  return cy.request({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts/1',  // Ruta protegida
    headers: {
      Authorization: `Bearer ${token}`,  // Incluimos el token en los headers
    },
    failOnStatusCode: false,  // Permitimos manejar manualmente errores como 401
  });
});

// Pruebas TOKEN con GitHub
Cypress.Commands.add('loginGitHub', () => {
  const token = process.env.GITHUB_TOKEN_SECRET;

  // Comprobamos si el token existe antes de guardarlo
  if (!token) {
    cy.log('¡Error! El token de GitHub no está presente.');
    throw new Error('Token de GitHub no encontrado.');
  }

  // Guardamos el token en localStorage
  window.localStorage.setItem('auth_token', token);
  cy.log('Token guardado en localStorage');
});

Cypress.Commands.add('getGitHubProfile', () => {
  const token = window.localStorage.getItem('auth_token');  // Obtenemos el token desde localStorage

  // Verificamos que el token no sea nulo antes de hacer la solicitud
  cy.log('Token recuperado: ' + token);

  if (!token) {
    cy.log('Token de GitHub no encontrado en localStorage');
    throw new Error('Token de GitHub no encontrado en localStorage');
  }

  return cy.request({
    method: 'GET',
    url: 'https://api.github.com/user',
    headers: {
      Authorization: `Bearer ${token}`,  // Asegúrate de que el token esté en la cabecera
    },
    failOnStatusCode: false,  // Permitimos manejar manualmente errores como 401
  });
});