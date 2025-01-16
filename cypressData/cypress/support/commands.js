// Comando para login con GitHub y guardar el token en localStorage
Cypress.Commands.add('loginGitHub', () => {
  const token = process.env.GITHUB_TOKEN_SECRET;

  // Verificamos si el token existe antes de guardarlo
  if (!token) {
    cy.log('¡Error! El token de GitHub no está presente.');
    throw new Error('Token de GitHub no encontrado.');
  }

  // Guardamos el token en localStorage
  window.localStorage.setItem('auth_token', token);
  cy.log('Token guardado en localStorage');
});

// Comando para obtener el perfil de GitHub usando el token guardado
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
