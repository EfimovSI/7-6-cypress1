import selectors from '../support/pages/locators.json';

let users;
let books;

before(() => {
  cy.fixture('../fixtures/users').then(function (fUsers) {
    users = fUsers;
  });
  cy.fixture('../fixtures/books').then(function (fBooks) {
    books = fBooks;
  });
});

beforeEach(() => {
  cy.viewport(Cypress.env('viewportWidth'), Cypress.env('viewportHeight'));
});

// it('Should successfully add books to list', (login = users.validUsers[0]
//   .mail, password = users.validUsers[0].pass, title = books.validBooks[0]
//   .title, description = books.validBooks[0].description, authors = books
//   .validBooks[0].authors, title1 = books.validBooks[1]
//   .title, description1 = books.validBooks[1].description, authors1 = books
//   .validBooks[1].authors, title2 = books.validBooks[2]
//   .title, description2 = books.validBooks[2].description, authors2 = books
//   .validBooks[2].authors) => {
//   cy.visit('/');
//   cy.login(login, password);
//   cy.addBookToList(title, description, authors);
//   cy.addBookToList(title1, description1, authors1);
//   cy.addBookToList(title2, description2, authors2);
//   cy.contains(title).should('be.visible');
//   cy.contains(title1).should('be.visible');
//   cy.contains(title2).should('be.visible');
// });

it('Should successfully add book to favorits', (login = users.validUsers[1]
  .mail, password = users.validUsers[1].pass, title = books.validBooks[0]
  .title, description = books.validBooks[0].description, authors = books
  .validBooks[0].authors, title1 = books.validBooks[1]
  .title, description1 = books.validBooks[1].description, authors1 = books
  .validBooks[1].authors, title2 = books.validBooks[2]
  .title, description2 = books.validBooks[2].description, authors2 = books
  .validBooks[2].authors) => {
  cy.visit('/');
  cy.login(login, password);
  cy.get('a:nth-child(2) button').click();
  cy.get(selectors.booksListPage.favorits).click();
  cy.contains(title1).should('be.visible');
});

it('Should successfully delete book from favorits', (login = users.validUsers[1]
  .mail, password = users.validUsers[1].pass, title1 = books.validBooks[1]
  .title, description1 = books.validBooks[1].description, authors1 = books
  .validBooks[1].authors) => {
  cy.visit('/');
  cy.login(login, password);
  cy.get('a:nth-child(2) button').click();
  cy.get(selectors.booksListPage.favorits).click();
  cy.contains('Please add some book to favorit on home page!').should(
    'be.visible'
  );
});
