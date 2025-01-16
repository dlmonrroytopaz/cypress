describe("Versão", () => {
    it("Versão", () => {
        /* ==== Generated with Cypress Studio ==== */
        //cy.visit('http://ourinvest.rf.qa.bankpro.com.br/open/');
        cy.visit('http://topazinvest.rf.qa.bankpro.com.br/open/#/seguranca/autenticacao/login');
        cy.get('[name="username"]').clear().type('bankpro_user');
        cy.get('[name="password"]').clear().type('topaz');
        cy.contains('button', 'Acessar').click();
        cy.wait(2000); // Espera 500ms, ajusta según el tiempo de la animación
        cy.get('.profile-item > [href="#"] > .topbar-icon').click();
        cy.get('.profile-item > [href="#"] > .topbar-icon').click();
        cy.get('a[href*="sobre?abrirTela=true"]').click();
   
        /* ==== End Cypress Studio ==== */
    });
});
