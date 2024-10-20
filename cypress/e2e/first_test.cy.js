describe('Signup/Login', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('should register user', () => {
    cy.get('.shop-menu :nth-child(4) a').should('be.visible').click();
    cy.get('.signup-form h2').contains('New User Signup!');
    cy.get('input[data-qa=signup-name]').clear().type('Mateusz');
    cy.get('input[data-qa=signup-email]').clear().type('Mateusz@gmail.com');
    cy.get('button[data-qa=signup-button]').click();
    cy.get('.login-form h2:first-child b').contains('Enter Account Information');
    cy.get('#id_gender1').check();
    cy.get('#password').clear().type('Mateusz123');
    cy.get('#days').select('19');
    cy.get('#months').select('June');
    cy.get('#years').select('2000');
    cy.get('#newsletter').check();
    cy.get('#first_name').clear().type('Mateusz');
    cy.get('#last_name').clear().type('Wolko');
    cy.get('#address1').clear().type('Konstancin-Jeziorna');
    cy.get('#country').select('India');
    cy.get('#state').clear().type('Piaseczynskie');
    cy.get('#city').clear().type('Grappa');
    cy.get('#zipcode').clear().type('05520');
    cy.get('#mobile_number').clear().type('123456789');
    cy.get('button[data-qa=create-account]').click();
    cy.get('.title b').contains('Account Created!');
    cy.get('a[data-qa="continue-button"]').click();
    cy.get('.navbar-nav li:last-child a').should('be.visible');
    cy.get('.navbar-nav li:nth-child(5) a').click();
    cy.get('h2[data-qa=account-deleted] b').contains('Account Deleted!');
    cy.get('a[data-qa=continue-button]').click();
  })
  it('should login user', () =>{
    cy.get('.shop-menu :nth-child(4) a').should('be.visible').click();
    cy.get('.signup-form h2').contains('New User Signup!');


  })
  it('Search products', () =>
  {
    ///cy.intercept('POST','/api/searchProduct','').as('searchProduct');

  })
})

