describe("Test Mail", () => {
    it("Test Mail", () => {
        //cy.logReportData('Test Mail', 'Test Mail');
        // Inicia el caso de prueba visitando la página
        cy.visit('http://scm.poc1.bankpro.com.br/open/#/seguranca/autenticacao/login');
        cy.get(':nth-child(2) > core-label > .md-inputfield > .ui-inputtext').clear('t');
        cy.get(':nth-child(2) > core-label > .md-inputfield > .ui-inputtext').type('topsys_user');
        cy.get('.ng-invalid.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').click();
        cy.get('form.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').clear();
        cy.get('form.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').type('topsys_user');
        cy.get(':nth-child(4) > .ui-button > .ui-button-text').click();
        //cy.after();/* ==== End Cypress Studio ==== */
        // Luego de completar la prueba, enviamos un correo electrónico
        cy.task('sendEmail', {
            subject: 'Prueba de correo despues del caso',
            text: 'El caso de prueba Prueba de correo despues del caso',
        }).then(result => {
            if (result.success) {
                console.log('Correo enviado exitosamente');
            } else {
                console.log('Error al enviar el correo:', result.error);
            }
        });
    });
});