import BasePage from "./BasePage.cy";

class CartPage extends BasePage
{
    elements=
        {
            homeButtonElement: () => cy.get('.breadcrumb a'),
            proceedToCheckoutButtonElement: () => cy.get('.check_out'),
            selectItemElements: (itemName) => cy.contains('.cart_info tr .cart_description h4',itemName),
            deleteItemElements: (itemName) => this.elements.selectItemElements(itemName).closest('tr').find('.cart_quantity_delete'),
            emptyCartInfoElement: () => cy.get('#empty_cart .text-center'),
        }

    deleteProduct(productName)
    {
        this.elements.deleteItemElements(productName).click();
        return this
    }

}

export default CartPage;