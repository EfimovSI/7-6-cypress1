// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//PO imports
import selectors from './pages/locators.json';
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (login = null, password = null) => {
  cy.contains('Log in').click();
  if (!login) {
    cy.get(selectors.mainPage.loginForm.passwordInput).type(password);
  } else if (!password) {
    cy.get(selectors.mainPage.loginForm.loginInput).type(login);
  } else {
    cy.get(selectors.mainPage.loginForm.loginInput).type(login);
    cy.get(selectors.mainPage.loginForm.passwordInput).type(password);
  }
  cy.get(selectors.mainPage.loginForm.submitButton).click();
});

Cypress.Commands.add('addBookToList', (title, description, cover, authors) => {
  cy.get(selectors.booksListPage.addNew).click();
  if (title) {
    cy.get(selectors.booksListPage.bookDescriptionForm.title).type(title);
  }
  if (description) {
    cy.get(selectors.booksListPage.bookDescriptionForm.description).type(
      description
    );
  }
  if (authors) {
    cy.get(selectors.booksListPage.bookDescriptionForm.authors).type(authors);
  }
  cy.get(selectors.booksListPage.bookDescriptionForm.submit).click();
});
