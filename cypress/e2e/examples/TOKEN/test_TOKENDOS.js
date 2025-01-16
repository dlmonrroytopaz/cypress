describe('Pruebas con JSONPlaceholder', () => {
  it('Debería obtener una lista de usuarios', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.greaterThan(0);  // Verifica que haya usuarios
      });
  });

  it('Debería crear un nuevo post', () => {
    const newPost = {
      title: 'Nuevo post de prueba',
      body: 'Este es el cuerpo del post.',
      userId: 1,
    };

    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
      });
  });
});