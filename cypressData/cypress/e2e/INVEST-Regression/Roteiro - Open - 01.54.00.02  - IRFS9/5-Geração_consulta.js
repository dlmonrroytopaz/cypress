describe("Geração de consulta", () => {
    it("Geração de consulta", () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://ourinvest.rf.qa.bankpro.com.br/open/');
        cy.get(':nth-child(2) > core-label > .md-inputfield > .ui-inputtext').type('bankpro_user');
        cy.get('.ng-invalid.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').click();
        cy.get('form.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').type('topaz');
        cy.get(':nth-child(4) > .ui-button > .ui-button-text').click();
        cy.get('.ui-listbox-list > :nth-child(1)').click();
        cy.get('.card-botoes > .ui-dialog-buttonpane > .ui-button > .ui-button-icon-left').click();
        cy.get(':nth-child(10) > .card > a > h2').click();
        cy.get('.ui-treenode-children > :nth-child(1) > .ui-treenode > .ui-treenode-content > .ui-tree-toggler').click();
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .ui-treenode-children > :nth-child(5) > .ui-treenode > .ui-treenode-content > .ui-treenode-label > span').click();
        cy.get('.ui-corner-left').click();
        cy.get('.botao-limpar > .ui-button > .ui-button-text').click();
        cy.get('.ui-breadcrumb-home > .ui-menuitem-link > .fa').click();
        cy.get(':nth-child(10) > .card > a > h2').click();
        cy.get(':nth-child(4) > .ui-treenode > .ui-treenode-content > .ui-tree-toggler').click();
        cy.get(':nth-child(4) > :nth-child(1) > .ui-treenode-children > :nth-child(7) > .ui-treenode > .ui-treenode-content > .ui-treenode-label > span').click();
        cy.get('.tipo-operacao-list-box > .ng-untouched > .ui-listbox > .ui-widget-header > .ui-chkbox > .ui-chkbox-box').click();
        cy.get('.tipo-papel-list-box > .ng-untouched > .ui-listbox > .ui-widget-header > .ui-chkbox > .ui-chkbox-box').click();
        cy.get('.ui-corner-left > .ui-button-text').click();
        cy.get('.ui-splitbutton-menubutton > .ui-button-icon-left').click();
        cy.get(':nth-child(2) > .ui-menuitem-link > .ui-menuitem-text').click();
        cy.get('.ui-breadcrumb-home > .ui-menuitem-link > .fa').click();
        cy.get(':nth-child(10) > .card > a > h2').click();
        cy.get(':nth-child(8) > .ui-treenode > .ui-treenode-content > .ui-tree-toggler').click();
        cy.get(':nth-child(8) > :nth-child(1) > .ui-treenode-children > :nth-child(5) > .ui-treenode > .ui-treenode-content > .ui-treenode-label > span').click();
        cy.get('.ui-widget-header > .ui-chkbox > .ui-chkbox-box').click();
        cy.get('.ui-corner-left > .ui-button-text').click();
        /* ==== End Cypress Studio ==== */
    });
});