/// <reference types="cypress" />

describe("Test Simulador Page", () => {
  it("Should visit page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Should click button earning option", () => {
    cy.get('[data-cy="button-bruto"]').click();
  });

  it("Should click button indexing option", () => {
    cy.get('[data-cy="button-ipca"]').click();
  });

  it("Should type in input 'aporteInicial'", () => {
    cy.get('[data-cy="input-aporteInicial"]').type(5).should("have.value", 5);
  });

  it("Should type in input 'aporteMensal'", () => {
    cy.get('[data-cy="input-aporteMensal"]').type(5).should("have.value", 5);
  });

  it("Should click in button 'simular'", () => {
    cy.get('[data-cy="button-simular"]').click();
  });

  it("Should have price value'", () => {
    cy.get('[data-cy="card-valorTotalInvestido"]').should("have.length", 1);
  });

  it("Should clean inputs'", () => {
    cy.get('[data-cy="button-clear"]').click();
    expect('[data-cy="input-aporteInicial"]').not.to.have.length;
    expect('[data-cy="input-aporteMensal"]').not.to.have.length;
  });
});
