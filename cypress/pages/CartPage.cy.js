
class CartPage
{
    elements=
        {
            homeButtonElement: () => cy.get('.breadcrumb a'),
            proceedToCheckoutButtonElement: () => cy.get('.check_out'),
            selectItemElements: (itemName) => cy.contains('.cart_info tr .cart_description h4 a',itemName),
            deleteItemElements: (itemName) => this.elements.selectItemElements(itemName).closest('tr').find('.cart_quantity_delete'),
            emptyCartInfoElement: () => cy.get('#empty_cart .text-center'),
            continueOnCartButtonElement: () => cy.get('.close-checkout-modal'),
            registerLoginButtonElement: () => cy.get('.modal-body a'),
            selectItemImageElement: (itemName) => this.elements.selectItemElements(itemName).closest('tr').find('img'),
        }

     goBackHome()
     {
         this.elements.homeButtonElement().click();
         return this;
     }

     clickItemDescription(itemName)
     {
         this.elements.selectItemElements().click();
     }

     clickItemImage(itemName)
     {
         this.elements.selectItemImageElement(itemName).click();
     }

    deleteProduct(productName)
    {
        this.elements.deleteItemElements(productName).click();
        return this
    }

    clickProceedToCheckout()
    {
        this.elements.proceedToCheckoutButtonElement().click();
        return this;
    }

    clickContinueOnCart()
    {
        this.elements.continueOnCartButtonElement().click();
        return this;
    }

    clickRegisterLogin()
    {
        this.elements.registerLoginButtonElement().click()
        return this;
    }




}

export default CartPage;