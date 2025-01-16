describe('Llamada a Jenkins desde Cypress', () => {
    it('Ejecuta un job en Jenkins', () => {
      // Obtener las variables de entorno del archivo .env
      const jenkinsUrl = 'http://<tu-servidor-jenkins>/job/<nombre-del-job>/build'; 
      const username = Cypress.env('JENKINS_USERNAME');
      const apiToken = Cypress.env('JENKINS_API_TOKEN');
  
      // Realizar la solicitud HTTP para ejecutar el job en Jenkins
      cy.request({
        method: 'POST',
        url: jenkinsUrl,
        auth: {
          username: username,
          password: apiToken  // Usamos el token de API como contraseña
        },
        failOnStatusCode: false // No fallará el test si Jenkins devuelve un error
      }).then((response) => {
        expect(response.status).to.eq(201);  // Esperamos un código 201 que indica que el job fue encolado
        cy.log('Job en Jenkins iniciado correctamente');
      });
    });
  });  

  // OPCIONAL
  /*
  cy.request({
  method: 'POST',
  url: 'http://<tu-servidor-jenkins>/job/<nombre-del-job>/buildWithParameters',
  qs: {
    PARAM1: 'valor1',  // Reemplaza con tus parámetros y valores
    PARAM2: 'valor2'
  },
  auth: {
    username: Cypress.env('JENKINS_USERNAME'),
    password: Cypress.env('JENKINS_API_TOKEN')
  }
}).then((response) => {
  expect(response.status).to.eq(201);  // Confirmación de que el trabajo fue iniciado
});
*/