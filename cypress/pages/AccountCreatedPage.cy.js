

class AccountCreatedPage
{
    elements =
        {
            continueButtonElement: () => cy.get('a[data-qa=continue-button]'),
            accountCreatedMessage: () => cy.get('.title b'),
        }

        clickContinueButton()
        {
            this.elements.continueButtonElement().click();
            return this;
        }
}

export default AccountCreatedPage;