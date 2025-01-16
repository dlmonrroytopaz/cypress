describe('Prueba Inicial', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });

  it('Test Uno', { allure: { story: 'Visualización de tareas' } }, () => {
    cy.allure().severity('normal'); // Definir la severidad de la prueba
    cy.allure().feature('Testing'); // Definir una característica de la prueba
    cy.allure().label('Mandalorian', 'Test'); // Añadir etiquetas personalizadas

    cy.get('.todo-list li').should('have.length', 2);
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill');
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog');
  });

  it('Test Dos', { allure: { story: 'Marcar tarea como completada' } }, () => {
    cy.allure().severity('critical'); // Definir la severidad de la prueba
    cy.allure().feature('Testing'); // Definir una característica de la prueba
    cy.allure().label('Mandalorian', 'Test'); // Añadir etiquetas personalizadas

    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check();
    
    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed');
  });

  context('Prueba Extendida', () => {
    beforeEach(() => {
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check();
    });

    it('Test Uno', { allure: { story: 'Filtrar tareas no completadas' } }, () => {
      cy.allure().severity('minor'); // Definir la severidad de la prueba
      cy.allure().feature('Testing'); // Definir una característica de la prueba
      cy.allure().label('Mandalorian', 'Test'); // Añadir etiquetas personalizadas

      cy.contains('Active').click();
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog');
      cy.contains('Pay electric bill').should('not.exist');
    });

    it('Test Dos', { allure: { story: 'Filtrar tareas completadas' } }, () => {
      cy.allure().severity('normal'); // Definir la severidad de la prueba
      cy.allure().feature('Testing'); // Definir una característica de la prueba
      cy.allure().label('Mandalorian', 'Test'); // Añadir etiquetas personalizadas

      cy.contains('Completed').click();
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill');
      cy.contains('Walk the dog').should('not.exist');
    });

    it('Test Tres', { allure: { story: 'Eliminar todas las tareas completadas' } }, () => {
      cy.allure().severity('trivial'); // Definir la severidad de la prueba
      cy.allure().feature('Testing'); // Definir una característica de la prueba
      cy.allure().label('Mandalorian', 'Test'); // Añadir etiquetas personalizadas

      cy.contains('Clear completed').click();
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill');
      cy.contains('Clear completed').should('not.exist');
    });
  });
});