import locators from '../support/pages/locators.json';

let users;
before(() => {
  cy.fixture('../fixtures/users').then(function (fUsers) {
    users = fUsers;
  });
});

it.skip('Should open the main page', () => {
  cy.visit('/');
  cy.contains('Books list');
});

it.skip('Should successfully login', (login = users.validUsers[0]
  .mail, password = users.validUsers[0].pass) => {
  cy.visit('/');
  cy.login(login, password);
  cy.contains(`Добро пожаловать ${login}`).should('be.visible');
});

it.skip('Should not login with empty login', (login = null, password = 'test') => {
  cy.visit('/');
  cy.login(login, password);
  cy.get(locators.mainPage.loginForm.loginInput)
    .then((el) => el[0].checkValidity())
    .should('be.false');
});
