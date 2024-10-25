
class SignupPage
{
    elements    =
        {
            genderRadioButtonElement: (genderName) => cy.get(`.clearfix input[value="${genderName}"]`),
            nameInputElement: () => cy.get('#name'),
            emailInputElement: () => cy.get('#email'),
            passwordInputElement: () => cy.get('#password'),
            dayOfBirtSelectElement: (dayOfBirth) => cy.get('#days').select(dayOfBirth),
            monthOfBirthSelectElement: (monthOfBirth) => cy.get('#months').select(monthOfBirth),
            yearOfBirthSelectElement: (yearOfBirth) => cy.get('#years').select(yearOfBirth),
            signupForNewsletterButtonElement: () => cy.get('newsletter'),
            receiveSpecialOffersButtonElement: () => cy.get('#optin'),
            firstNameInputElement: () => cy.get('#first_name'),
            lastNameInputElement: () => cy.get('#last_name'),
            companyNameInputElement: () => cy.get('#company'),
            addressInputElement: () => cy.get('#address1'),
            address2InputElement: () => cy.get('#address2'),
            countrySelectElement: (countryName) => cy.get('#country').select(countryName),
            stateInputElement: () => cy.get('#state'),
            cityInputElement: () => cy.get('#city'),
            zipcodeInputElement: () => cy.get('#zipcode'),
            mobileNumberInputElement: () => cy.get('#mobile_number'),
            createAccountButtonElement: () => cy.get('button[data-qa=create-account]'),

        }


        selectGender(genderName)
        {
            this.elements.genderRadioButtonElement(genderName).check();
            return this;
        }

        enterName(nameName)
        {
            this.elements.nameInputElement().clear().type(name);
        }

        enterPassword(passwordName)
        {
            this.elements.passwordInputElement().clear().type(passwordName);
        }

        selectDayOfBirth(dayOfBirth)
        {
            this.elements.dayOfBirtSelectElement(dayOfBirth);
            return this;
        }

        selectMonthOfBirth(monthOfBirth)
        {
            this.elements.monthOfBirthSelectElement(monthOfBirth);
            return this;
        }

        selectYearOfBirth(yearOfBirth)
        {
            this.elements.yearOfBirthSelectElement(yearOfBirth);
            return this;
        }

        clickSignupForNewsletterButtonButton()
        {
            this.elements.signupForNewsletterButtonElement().click();
            return this;
        }

        clickReceiveSpecialOffersButton()
        {
            this.elements.receiveSpecialOffersButtonElement().click();
            return this;
        }

        enterFirstNameInput(firstName)
        {
            this.elements.firstNameInputElement().clear().type(firstName);
            return this;
        }

        enterLastNameInput(lastName)
        {
            this.elements.lastNameInputElement().clear().type(lastName);
            return this;
        }

        enterCompanyNameInput(companyName)
        {
            this.elements.companyNameInputElement().clear().type(companyName);
            return this;
        }

        enterAddressInput(address)
        {
            this.elements.addressInputElement().clear().type(address);
            return this;
        }

        enterAddress2Input(address2)
        {
            this.elements.address2InputElement().clear().type(address2);
            return this;
        }

        selectCountry(countryName)
        {
            this.elements.countrySelectElement(countryName);
            return this;
        }

        enterState(stateName)
        {
            this.elements.stateInputElement().clear().type(stateName);
            return this;
        }

        enterCity(cityName)
        {
            this.elements.cityInputElement().clear().type(cityName);
            return this;
        }

        enterZipcode(zipcodeName)
        {
            this.elements.zipcodeInputElement().clear().type(zipcodeName);
            return this;
        }

        enterMobileNumber(mobileNumber)
        {
            this.elements.mobileNumberInputElement().clear().type(mobileNumber);
            return this;
        }

        clickCreateAccountButton()
        {
            this.elements.createAccountButtonElement().click();
            return this;
        }
}

export default SignupPage;