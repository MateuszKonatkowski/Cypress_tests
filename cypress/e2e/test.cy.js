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

        mainPage.addToCart("Blue Top").clickViewCartModalButton();
        cartPage.deleteProduct('Blue Top');

       cartPage.elements.emptyCartInfoElement().invoke('text')
           .then((text) =>
        {
            expect(text.trim()).to.eq('Cart is empty! Click here to buy products.');
        })




    })
})