

class ProductsPage {

    elements =
    {
        searchProductsInput: () => cy.get('#search_product'),
        searchProductsButton: () => cy.get('#submit_search'),
    }

    searchProduct(searchProducts)
    {
        this.elements.searchProductsInput().type(searchProducts);
        this.elements.searchProductsButton().click();
        return this;
    }

}

export default ProductsPage;