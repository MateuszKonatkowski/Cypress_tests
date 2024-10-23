class MainPage {
    elements =
        {
            enterPageElements: (pageName) => cy.contains('.shop-menu  a',pageName),
            selectCategoryElement: (categoryName) => cy.contains('#accordian h4 a',categoryName),
            selectSubCategoryElement: (categoryName,subCategoryName) => this.elements.selectCategoryElement(categoryName).closest('.panel').contains('.panel-body li a',subCategoryName),
            selectItemsElements: (itemName) => cy.contains('.features_items .productinfo p',itemName),
            viewProductButtonElement: (itemName) => this.elements.selectItemsElements(itemName).closest('.product-image-wrapper').find('.choose a'),
            addItemToCartButtonElement: (itemName) => this.elements.selectItemsElements(itemName).closest('.productinfo').find('a'),
            goBackToProductsButtonElement: () => cy.get('.breadcrumb a'),
            scrollUpButtonElements: () => cy.get('#scrollUp'),
            selectRecommendedItemsElement: (itemName) => cy.contains('#recommended-item-carousel .item.active p',itemName,{timeout:10000}),
            addToCartRecommendedItemButtonElement: (itemName) => this.elements.selectRecommendedItemsElement(itemName).closest('.single-products').find('a'),
            continueShoppingButtonElement: () => cy.get('.modal-footer .btn-success'),
            viewCartButtonElement: () => cy.get('.modal-content a'),
            subscriptionInputElement: () => cy.get('#susbscribe_email'),
            subscriptionButtonElement: () => cy.get('#subscribe'),
            sendEmailMessageElement: () => cy.get('alert-success alert'),
        }

        enterPage(pageName)
        {
            this.elements.enterPageElements(pageName).click();
            return this;
        }

        selectCategory(categoryName)
        {
            this.elements.selectCategoryElement(categoryName).click();
            return this;
        }

        selectSubCategory(categoryName,subCategoryName)
        {
            this.elements.selectCategoryElement(categoryName).click();
            this.elements.selectSubCategoryElement(categoryName,subCategoryName).click();
            return this;
        }

        addItemToCart(itemName)
        {
            this.elements.addItemToCartButtonElement(itemName).click();
            return this;
        }

        viewProduct(itemName)
        {
            this.elements.viewProductButtonElement(itemName).click();
            return this;
        }

        goBackToProducts()
        {
            this.elements.goBackToProductsButtonElement().click();
            return this;
        }

        scrollUp()
        {
            this.elements.scrollUpButtonElements().click();
            return this;
        }

        addToCartRecommendedItem(itemName)
        {
            this.elements.addToCartRecommendedItemButtonElement(itemName).click();
            return this;
        }

        clickContinueShopping()
        {
            this.elements.continueShoppingButtonElement().click();
            return this;
        }

        viewCart()
        {
            this.elements.viewCartButtonElement().click();
            return this;
        }

        sendSubscriptionEmail(emailName)
        {
            this.elements.subscriptionInputElement().clear().type(emailName);
            this.elements.subscriptionButtonElement().click();
            return this;
        }


}

export default MainPage