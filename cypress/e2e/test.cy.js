import MainPage from '../pages/MainPage.cy'
import ProductPage from '../pages/ProductsPage.cy'
import CartPage from '../pages/CartPage.cy'
import LoginPage from '../pages/LoginPage.cy'

const mainPage = new MainPage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const loginPage = new LoginPage();

beforeEach(() => {
    cy.visit('https://automationexercise.com');
})

describe('Login/Register', () => {

    it('should login User with correct email and password', () => {

        expect(mainPage.elements.enterPageElements('Home').should('be.visible'));
        mainPage.enterPage(' Signup / Login');
        expect(loginPage.elements.loginFormTextElement().should('be.visible'));
        loginPage.login('Mateusz1234@gmail.com','Mateusz1234');
        expect(mainPage.elements.enterPageElements('Logged in as Mateusz1234').should('be.visible'));
        mainPage.enterPage('Logout');
        expect(cy.url().should('include', '/login'));
    })
    it('should not login User with incorrect email and password',() => {
        expect(mainPage.elements.enterPageElements('Home').should('be.visible'));
        mainPage.enterPage(' Signup / Login');
        expect(loginPage.elements.loginFormTextElement().should('be.visible'));
        loginPage.login('Mateusz@gmail.com','Mateusz');
        expect(loginPage.elements.incorrectLoginCredentialsInfoElement().should('be.visible'));
    })
    it('should not register User with existing email',() => {
        expect(cy.url().should('include', '/'));
        mainPage.enterPage(' Signup / Login');
        expect(loginPage.elements.signupFormTextElement().should('be.visible'));
        loginPage.signup('Mateusz1234','Mateusz1234@gmail.com');
        expect(loginPage.elements.signupFormErrorMessageElement().should('be.visible'));

    })
})

describe('VerifyPage', () => {

    it('should Verify Test Cases Page', () => {
        expect(cy.url().should('include', '/'));
        mainPage.enterPage('Test Cases');
        expect(cy.url().should('include', '/test_cases'));
    })
})