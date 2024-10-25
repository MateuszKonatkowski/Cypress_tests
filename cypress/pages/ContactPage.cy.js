
class ContactPage
{
    elements =
        {
            nameInputElement: () => cy.get('input[data-qa=name]'),
            emailInputElement: () => cy.get('input[data-qa=email]'),
            subjectInputElement: () => cy.get('input[data-qa=subject]'),
            messageInputElement: () => cy.get('textarea'),
            submitButtonElement: () => cy.get('input[data-qa=submit-button]'),
            fileInputElement: () => cy.get('input[name=upload_file]'),
            formTitleElement: () => cy.get('.contact-form .title'),
            statusMessageElement: () => cy.get('.status'),
            homeButtonElement: () => cy.get('.btn-success'),
        }


     atachFile(filename)
     {
         cy.uploadFile(filename, 'input[name=upload_file]');
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
    enterSubject(subject)
    {
        this.elements.subjectInputElement().clear().type(subject);
        return this;
    }
    enterMessage(message)
    {
        this.elements.messageInputElement().clear().type(message);
        return this;
    }
    clickSubmitButton()
    {
        this.elements.submitButtonElement().click();
        return this;
    }
    clickHomeButton()
    {
        this.elements.homeButtonElement().click();
        return this;
    }
}

export default ContactPage;