describe.skip("Abertura do dia", () => {
    it("Abertura do dia - Paso 1", () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://ourinvest.rf.qa.bankpro.com.br/');
        cy.get(':nth-child(8) > .btn').click();
        cy.get('form.ng-untouched > .ui-g > :nth-child(2) > core-label > .md-inputfield > .ui-inputtext').click();
        cy.get('form.ng-untouched > .ui-g > :nth-child(2) > core-label > .md-inputfield > .ui-inputtext').click();
        cy.get('.ng-invalid.ng-dirty > .ui-g > :nth-child(2) > core-label > .md-inputfield > .ui-inputtext').type('bankpro_user');
        cy.get('.ng-invalid.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').click();
        cy.get('.ng-invalid.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').click();
        cy.get('form.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').type('topaz');
        cy.get(':nth-child(4) > .ui-button > .ui-button-text').click();
        cy.get(':nth-child(6) > .card > a > h2').click();
        cy.get('.data-calculo > .ui-calendar > .ui-inputtext').clear('31/71/2202');
        cy.get('.data-calculo > .ui-calendar > .ui-inputtext').type('30/09/2024{enter}');
        cy.get('.botoes-pesquisa > [icon="ui-icon-search"] > .ui-button-text').click();
        cy.get('[label="Sim"] > .ui-button-text').click();
        cy.get('apuracao-diaria-curva > core-messages-log > p-dialog > .ui-dialog > :nth-child(2) > .ui-dialog-content > footer > .ui-dialog-buttonpane > [icon="ui-icon-highlight-off"] > .ui-button-text').click();
        cy.get('body').click();
        /* ==== End Cypress Studio ==== */
    });

    it("Abertura do dia - Paso 2", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://ourinvest.rf.qa.bankpro.com.br/open/');
    cy.get('form.ng-untouched > .ui-g > :nth-child(2)').click();
    cy.get(':nth-child(2) > core-label > .md-inputfield > .ui-inputtext').type('bankpro_user');
    cy.get('.ng-invalid.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').click();
    cy.get('form.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').type('topaz');
    cy.get('form.ng-dirty > .ui-g > :nth-child(4)').click();
    cy.get(':nth-child(4) > .ui-button > .ui-button-text').click();
    cy.get(':nth-child(4) > .ui-button > .ui-button-text').click();
    cy.get('.ui-listbox-list > :nth-child(1)').click();
    cy.get('.card-botoes > .ui-dialog-buttonpane > .ui-button > .ui-button-icon-left').click();
    cy.get('.dia-sistema').click();
    cy.get('.proxima-data').click();
    cy.get('.ui-g > :nth-child(1) > .ui-button > .ui-button-text').click();
    cy.get('p-footer > [icon="fa-check"] > .ui-button-text').click();
    cy.get('[icon="ui-icon-highlight-off"] > .ui-button-text').click();
    cy.get('.btn-large > .material-icons').click();
    cy.get(':nth-child(7) > .btn-floating > .material-icons').click();
    cy.get(':nth-child(2) > .ui-dialog > .ui-dialog-footer > p-footer > [icon="fa-check"]').click();
    cy.get('[icon="ui-icon-highlight-off"] > .ui-button-text').click();
    cy.get('.processo-area > .aside > p-accordion > .dashboard-data > :nth-child(2) > .ui-accordion-header > .fa').click();
    cy.get('.processo-area > .aside > p-accordion > .dashboard-data > :nth-child(3) > .ui-accordion-header > .fa').click();
    cy.get('.processo-area > .aside > p-accordion > .dashboard-data > :nth-child(2) > .ui-accordion-header > .fa').click();
    /* ==== End Cypress Studio ==== */
    });
});