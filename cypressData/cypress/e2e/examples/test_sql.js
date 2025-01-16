import dbConfig from 'C:/Cypress/Mandalorian/INVEST/cypress/support/dbConfig'; // Adjust the path according to your folder structure
 
describe.skip('Test SQL', () => {
  it('Ejecutar consulta SQL', () => {
    cy.logReportData('Test SQL', 'Test SQL');
    cy.task('queryDb', 'SELECT NOMBRE FROM OPERACIONES WHERE IDENTIFICACION=1660')
      // Change to your query.
      .then((result) => {        
        // Do something with the result
        expect(result).to.have.length.greaterThan(0);
        expect(result[0]).to.have.property('NOMBRE');  // Ensure you are checking a valid column
        cy.log(JSON.stringify(result));
     });
  });
});
