
class SignupLoginPage
{
    elements =
        {
            emailLoginInputElement: () => cy.get('input[data-qa=login-email]'),
            passwordInputElement: () => cy.get('input[data-qa=login-password]'),
            loginButtonElement: () => cy.get('button[data-qa=login-button]'),
            nameSignupInputElement: () => cy.get('input[data-qa=signup-name]'),
            emailSignupInputElement: () => cy.get('input[data-qa=signup-email]'),
            signupButtonElement: () => cy.get('button[data-qa=signup-button]'),
            incorrectLoginCredentialsInfoElement: () => cy.get('.login-form p'),
        }

    login(email, password)
    {
        this.elements.emailLoginInputElement().clear().type(email);
        this.elements.passwordInputElement().clear().type(password);
        this.elements.loginButtonElement().click();
        return this;
    }

    signup(name, email)
    {
        this.elements.nameSignupInputElement().clear().type(name);
        this.elements.emailSignupInputElement().clear().type(email);
        this.elements.signupButtonElement().click();
        return this;
    }
}