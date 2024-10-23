import BasePage from "./BasePage.cy";


class ProductsPage extends BasePage {

    elements =
    {
        searchProductsInput: () => cy.get('#search_product'),
        searchProductsButton: () => cy.get('#submit_search'),
    }

    enterSearchProducts(searchProducts)
    {
        this.elements.searchProductsInput().type(searchProducts);
        this.elements.searchProductsButton().click();
        return this;
    }

}
export default ProductsPage;