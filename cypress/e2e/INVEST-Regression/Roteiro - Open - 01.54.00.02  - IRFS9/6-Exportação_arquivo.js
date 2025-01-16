describe("Exportação de arquivo", () => {
    it("Exportação de arquivo", () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://ourinvest.rf.qa.bankpro.com.br/open/');
        cy.get(':nth-child(2) > core-label > .md-inputfield > .ui-inputtext').type('bankpro_user');
        cy.get('.ng-invalid.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').click();
        cy.get('form.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').type('topaz');
        cy.get(':nth-child(4) > .ui-button > .ui-button-text').click();
        cy.get('.ui-listbox-list > :nth-child(1)').click();
        cy.get('.card-botoes > .ui-dialog-buttonpane > .ui-button > .ui-button-icon-left').click();
        cy.get(':nth-child(11) > .card > a > h2').click();
        cy.get(':nth-child(2) > .ui-treenode > .ui-treenode-content > .ui-treenode-label > span').click();
        cy.get('.ui-picklist-source-wrapper > .ui-widget-content > :nth-child(1)').click();
        cy.get('[icon="fa-angle-right"] > .ui-button-icon-left').click();
        cy.get('.button-export > .ui-button-text').click();
        cy.get('[icon="ui-icon-highlight-off"] > .ui-button-text').click();
        /* ==== End Cypress Studio ==== */
    });
});