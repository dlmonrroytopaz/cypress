//const { expect } = require('chai');

/*describe('Test de edad', () => {
  it('debe comprobar que age no es 51', () => {
    const age = 41;  // Valor que estás probando

    try {
      // Aquí la prueba normal con Chai
      expect(age).to.equal(51, 'Esperaba 51 pero encontré otro valor');
    } catch (error) {
      // Aquí capturamos el error y mostramos un mensaje más detallado
      console.error('Hubo un error en la prueba:', error.message);
      // Puedes lanzar el error nuevamente para que Mocha lo registre
      throw error;
    }
  });
});*/

describe("Predictor de edad", () => {
  const endpoint = 'https://api.agify.io'
  const url = 'https://api.agify.io/?name=diego'
  it("verificar la edad", () => {

    const parametro = 'name';
    const name = 'diego'; 

    cy.request(`${endpoint}?${parametro}=${name}`).then(respuesta=> {
      const data = JSON.stringify(respuesta.body)
      const age = Number(JSON.stringify(respuesta.body.age))
      const count = JSON.stringify(respuesta.body.count)
      const name = JSON.stringify(respuesta.body.name)
      cy.log('verificar propiedad "age"')
      expect(age).to.be.a('number')
      expect(age).to.equal(51)
      expect(age).to.not.be.null
      cy.wait(20000)
    })

  });
});
