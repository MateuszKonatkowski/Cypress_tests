class MainPage {
    elements =
        {
            homeButton: () => cy.get('.shop-menu :nth-child(1) a'),
            productsButton: () => cy.get('.shop-menu :nth-child(2) a'),
            cartButton: () => cy.get('.shop-menu :nth-child(3) a'),
            loginButton: () => cy.get('.shop-menu :nth-child(4) a')

        }

    visitMain()
    {
        return cy.visit('https://automationexercise.com');
    }
    enterHomePage() {
        this.enterHomePage().homeButton().click();
    }

    enterProductsPage() {
        this.enterProductsPage().productsButton().click();
    }

    enterCartPage() {
        this.enterCartPage().cartButton().click();
    }

    enterLoginPage() {
        this.enterLoginPage().loginButton().click();
    }




}
