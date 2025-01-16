describe('Pruebas con autenticación y tokens', () => {
  beforeEach(() => {
    cy.login();  // Este comando obtiene el token y lo guarda en localStorage
  });

  it('Debería acceder a un recurso protegido utilizando un token', () => {
    cy.getProtectedData().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.eq(1);  // Comprobamos que es el recurso esperado
    });
  });

  it('Debería fallar si el token no está presente', () => {
    window.localStorage.removeItem('auth_token');  // Elimina el token de localStorage para simular que el usuario no está autenticado

    cy.getProtectedData().then((response) => {
      expect(response.status).to.eq(401);  // Debería fallar con un error 401 por falta de token
    });
  });
});