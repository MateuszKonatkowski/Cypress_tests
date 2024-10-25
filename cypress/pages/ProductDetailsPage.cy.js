
class ProductDetails
{
    elements =
        {
            quantityInputElement:() => cy.get('#quantity'),
            addToCartButtonElement:() => cy.get('.cart'),
            nameInputElement:() => cy.get('#name'),
            emailInputElement:() => cy.get('#email'),
            reviewTextareaElement:() => cy.get('review'),
            submitButtonElement:() => cy.get('#button-review'),
            productNameElement:() => cy.get('.product-information h2'),
            categoryElement:() => cy.get('.product-information p:first-of-type'),
            priceElement:() => cy.get('.product-information span span'),
            availabilityElement:() => cy.get('.product-information p:nth-of-type(2)'),
            conditionElement:() => cy.get('.product-information p:nth-of-type(3)'),
            brandElement:() => cy.get('.product-information p:nth-of-type(4)'),
            productsItemElements:() => cy.get('.features_items .productinfo p'),

        }

       addProductToCart(quantity)
       {
           this.elements.quantityInputElement(quantity);
           this.elements.addToCartButtonElement().click();
           return this;
       }
       enterName(name)
       {
           this.elements.nameInputElement().clear().type(name);
           return this;
       }
       enterEmail(email)
       {
           this.elements.emailInputElement().clear().type(email);
           return this;
       }
       enterReview(review)
       {
           this.elements.reviewTextareaElement().clear().type(review);
           return this;
       }
       clickSubmit()
       {
           this.elements.submitButtonElement().click();
           return this;
       }


}

export default ProductDetails;