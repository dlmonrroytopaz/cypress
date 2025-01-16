describe('MipruebaconMochawesome', () => {
 it('Debería pasar este test', () => {
    cy.visit('https://www.example.com');
    cy.get('h1').should('contain', 'Example Domain');
  });

  it('deberiafallarestetest', () => {
    cy.visit('https://www.example.com');
    cy.get('h1', { timeout: 8000 }).should('contain', 'Texto Inexistente');  // Esto fallará
  });

  

});
