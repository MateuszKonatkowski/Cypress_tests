import MainPage from '../pages/MainPage.cy'
import ProductPage from '../pages/ProductsPage.cy'
import CartPage from '../pages/CartPage.cy'
import LoginPage from '../pages/LoginPage.cy'
import ContactPage from "../pages/ContactPage.cy";
import ProductDetailsPage from "../pages/ProductDetailsPage.cy";

const mainPage = new MainPage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const loginPage = new LoginPage();
const contactPage = new ContactPage();
const productDetailsPage = new ProductDetailsPage();

beforeEach(() => {
    cy.visit('https://automationexercise.com');
})

describe('Login/Register page', () => {

    it('should login User with correct email and password', () => {

        mainPage.elements.enterPageElements('Home').should('be.visible');
        mainPage.enterPage(' Signup / Login');
        loginPage.elements.loginFormTextElement().should('be.visible');
        loginPage.login('Mateusz1234@gmail.com','Mateusz1234');
        mainPage.elements.enterPageElements('Logged in as Mateusz1234').should('be.visible');
        mainPage.enterPage('Logout');
        cy.url().should('match', /login$/);
    })
    it('should not login User with incorrect email and password',() => {
        mainPage.elements.enterPageElements('Home').should('be.visible');
        mainPage.enterPage(' Signup / Login');
        loginPage.elements.loginFormTextElement().should('be.visible');
        loginPage.login('Mateusz@gmail.com','Mateusz');
        loginPage.elements.incorrectLoginCredentialsInfoElement().should('be.visible');
    })
    it('should not register User with existing email',() => {
        cy.url().should('match', /$/);
        mainPage.enterPage(' Signup / Login');
        loginPage.elements.signupFormTextElement().should('be.visible');
        loginPage.signup('Mateusz1234','Mateusz1234@gmail.com');
        loginPage.elements.signupFormErrorMessageElement().should('be.visible');

    })
})

describe('Test Cases Page', () => {

    it('should Verify Test Cases Page', () => {
        cy.url().should('include', '/');
        mainPage.enterPage('Test Cases');
        cy.url().should('match', /test_cases$/);
    })
})

describe('Contact us page', () =>
{
    it('should send contact form',() =>
    {
        cy.url().should('match', /$/);
        mainPage.enterPage('Contact us');
        contactPage.elements.formTitleElement().should('be.visible');
        contactPage
            .enterName('Mateusz')
            .enterEmail('Mateusz1234@gmail.com')
            .enterSubject('QA')
            .enterMessage('12345678')
            .atachFile('1.png')
            .clickSubmitButton();
        cy.confirmAlert;
        contactPage.elements.statusMessageElement().should('be.visible');
        contactPage.clickHomeButton();
        cy.url().should('match', /$/);
    })
})

describe('Products page', () =>
{
    it('should verify All Products and product detail page', () =>
    {
        cy.url().should('match', /$/);
        mainPage.enterPage('Products');
        cy.url().should('match',/products$/);
        productDetailsPage.elements.productsItemElements().should('be.visible');
        mainPage.viewProduct('Blue Top');
        productDetailsPage.elements.productNameElement().should('be.visible');
        productDetailsPage.elements.categoryElement().should('be.visible');
        productDetailsPage.elements.priceElement().should('be.visible');
        productDetailsPage.elements.availabilityElement().should('be.visible');
        productDetailsPage.elements.conditionElement().should('be.visible');
        productDetailsPage.elements.brandElement().should('be.visible');
    })

    it('should search product',() =>
    {
        cy.url().should('match', /$/);
        mainPage.enterPage('Products');
        cy.url().should('match',/products$/);
        productPage.searchProduct('Blue Top');
        mainPage.elements.selectItemsElements('Blue Top').should('be.visible');
        productDetailsPage.elements.productsItemElements().its('length').should('equal',1);

    })
})

