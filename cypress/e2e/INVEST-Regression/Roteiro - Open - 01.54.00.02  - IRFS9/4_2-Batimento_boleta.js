describe.skip("Batimento de boleta", () => {
    it(" Batimento de boleta - Paso 1", () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://ourinvest.rf.qa.bankpro.com.br/open/');
        cy.get(':nth-child(2) > core-label > .md-inputfield > .ui-inputtext').type('bankpro_user');
        cy.get('.ng-invalid.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').click();
        cy.get('form.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').type('topaz');
        cy.get(':nth-child(4) > .ui-button > .ui-button-text').click();
        cy.get('.ui-listbox-list > :nth-child(1) > span').click();
        cy.get('.card-botoes > .ui-dialog-buttonpane > .ui-button > .ui-button-text').click();
        cy.get(':nth-child(2) > .card > a > h2').click();
        cy.get('.botao-pesquisar > .ui-button > .ui-button-text').click();
        cy.get(':nth-child(7) > .ui-selection-column > p-dtcheckbox > .ui-chkbox > .ui-chkbox-box').click();
        cy.get('p-header > :nth-child(1) > .ui-button > .ui-button-icon-left').click();
        cy.get('.batimento-container > p-footer > .card-botoes > :nth-child(1) > .ui-button > .ui-button-text').click();
        cy.get(':nth-child(6) > .ui-selection-column > p-dtcheckbox > .ui-chkbox > .ui-chkbox-box').click();
        cy.get('p-header > :nth-child(1) > .ui-button > .ui-button-icon-left').click();
        cy.get('.batimento-container > p-footer > .card-botoes > :nth-child(1) > .ui-button > .ui-button-text').click();
        cy.get('[icon="ui-icon-highlight-off"] > .ui-button-text').click();
        cy.get('.batimento-container > p-footer > .card-botoes > :nth-child(2) > .ui-button > .ui-button-text').click();
        cy.get(':nth-child(5) > .ui-selection-column > p-dtcheckbox > .ui-chkbox > .ui-chkbox-box').click();
        cy.get('p-header > :nth-child(1) > .ui-button > .ui-button-icon-left').click();
        cy.get('.batimento-container > p-footer > .card-botoes > :nth-child(1) > .ui-button > .ui-button-text').click();
        cy.get(':nth-child(4) > .ui-selection-column > p-dtcheckbox > .ui-chkbox > .ui-chkbox-box').click();
        cy.get('p-header > :nth-child(1) > .ui-button > .ui-button-icon-left').click();
        cy.get('.batimento-container > p-footer > .card-botoes > :nth-child(1) > .ui-button > .ui-button-text').click();
        cy.get(':nth-child(3) > .ui-selection-column > p-dtcheckbox > .ui-chkbox > .ui-chkbox-box').click();
        cy.get('p-header > :nth-child(1) > .ui-button > .ui-button-icon-left').click();
        cy.get('.batimento-container > p-footer > .card-botoes > :nth-child(1) > .ui-button > .ui-button-text').click();
        cy.get('[icon="ui-icon-highlight-off"] > .ui-button-text').click();
        cy.get('.batimento-container > p-footer > .card-botoes > :nth-child(2) > .ui-button > .ui-button-text').click();
        cy.get(':nth-child(2) > .ui-selection-column > p-dtcheckbox > .ui-chkbox > .ui-chkbox-box').click();
        cy.get('p-header > :nth-child(1) > .ui-button > .ui-button-icon-left').click();
        cy.get('.batimento-container > p-footer > .card-botoes > :nth-child(1) > .ui-button > .ui-button-text').click();
        cy.get('.ui-datatable-data > :nth-child(1) > .ui-selection-column > p-dtcheckbox > .ui-chkbox > .ui-chkbox-box').click();
        cy.get('p-header > :nth-child(1) > .ui-button > .ui-button-icon-left').click();
        cy.get('.batimento-container > p-footer > .card-botoes > :nth-child(1) > .ui-button > .ui-button-icon-left').click();
        cy.get('.botao-limpar > .ui-button > .ui-button-icon-left').click();
        /* ==== End Cypress Studio ==== */        
    });

    it("Batimento de boleta - Paso 2", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://ourinvest.rf.qa.bankpro.com.br/');
    cy.get(':nth-child(2) > .btn > .sigla').click();
    cy.get('#login-input-usuario').type('bankpro_user');
    cy.get('#login-input-senha').type('topaz');
    cy.get('.ui-button-text').click();
    cy.get('#menu_sub_integracao > :nth-child(1)').click();
    cy.get('#menu_sub_integracao_painel_renda_fixa > .marginLevel-1').click();
    cy.get('#menu_sub_integracao_painel_renda_fixa_geranciamento > .marginLevel-2').click();
    cy.get('#btnFiltro > .ui-button-icon-left').click();
    /* ==== End Cypress Studio ==== */   
    });

    it("Batimento de boleta - Paso 3", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://ourinvest.rf.qa.bankpro.com.br/');
    cy.get(':nth-child(5) > .btn').click();
    cy.get('form.ng-untouched > .ui-g > :nth-child(2) > core-label > .md-inputfield > .ui-inputtext').click();
    cy.get('.ng-invalid.ng-dirty > .ui-g > :nth-child(2) > core-label > .md-inputfield > .ui-inputtext').type('bankpro_user');
    cy.get('.ng-invalid.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').click();
    cy.get('form.ng-dirty > .ui-g > :nth-child(3) > core-label > .md-inputfield > .ui-inputtext').type('topaz');
    cy.get(':nth-child(4) > .ui-button > .ui-button-text').click();
    cy.get(':nth-child(2) > .card > a > h2').click();
    cy.get('.botao-pesquisar > .ui-button > .ui-button-text').click();
    cy.get('.classInstituicaoGerenciador > core-label > .md-inputfield > .ng-untouched > .ui-dropdown').click();
    cy.get('.ui-dropdown-items > :nth-child(4)').click();
    cy.get('.botao-pesquisar > .ui-button > .ui-button-text').click();
    cy.get('.botao-limpar > .ui-button > .ui-button-text').click();
    /* ==== End Cypress Studio ==== */  
    });
});