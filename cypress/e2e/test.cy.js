import MainPage from '../pages/MainPage.cy'
import ProductPage from '../pages/ProductsPage.cy'
import CartPage from '../pages/CartPage.cy'

const mainPage = new MainPage();
const productPage = new ProductPage();
const cartPage = new CartPage();

beforeEach(() => {
    cy.visit('https://automationexercise.com');
})

describe('test', () => {

    it('test', () => {

        mainPage.sendSubscriptionEmail('fsf@gmail.com');

    })
})