describe('Pruebas con autenticación y tokens de GitHub', () => {
  beforeEach(() => {
    cy.loginGitHub();  // Ejecutamos el login con GitHub al inicio de cada prueba
  });

  it('Debería acceder a la información del perfil de GitHub utilizando un token', () => {
    cy.getGitHubProfile().then((response) => {
      expect(response.status).to.eq(200);  // Asegúrate de que el token es válido
      expect(response.body).to.have.property('login');  // Verificamos que tenga el campo 'login'
    });
  });

  it('Debería fallar si el token no está presente', () => {
    window.localStorage.removeItem('auth_token');  // Elimina el token de localStorage

    cy.getGitHubProfile().then((response) => {
      expect(response.status).to.eq(401);  // Debería fallar con un error 401 por falta de token
    });
  });
});
