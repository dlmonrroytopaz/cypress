//EVALUAR PRUEBA SIN EL ANTIVIRUS PARA VALIDAR USO DE TOKEN
describe('Pruebas con la API de CoinGecko', () => {
  it('Debería obtener el precio de Bitcoin', () => {
    cy.request('GET', 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then((response) => {
        cy.log('Respuesta CoinGecko:', response);  // Verifica la respuesta
        expect(response.status).to.eq(200);  // Asegúrate de que el status es 200
        expect(response.body).to.have.property('bitcoin');
        expect(response.body.bitcoin).to.have.property('usd');
      });
  });
});