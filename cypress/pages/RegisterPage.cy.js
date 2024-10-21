class RegisterPage
{
    elements    =
        {
            signupNameInput : () => cy.get('input[data-qa=signup-name]'),
            singupMailInput: () => cy.get('input[data-qa=signup-email]')
        }
}