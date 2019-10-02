package com.farmdrop.farmdrop.stepdefinitions;

import com.farmdrop.farmdrop.pages.SignUpPage;
import com.formdrop.formdrop.driverfactory.DriverFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SingUpPageStepDefinitions {
	private SignUpPage signUpPage;
	
	public SingUpPageStepDefinitions() {
		signUpPage=new SignUpPage(DriverFactory.getDriver());
	}
	
	@When("^User fills sign up form fields \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void fillEmailSignUpForm(String emailAddress, String password, String postCode, String marketOption) throws Throwable {
		signUpPage.fillEmailSignUpForm(emailAddress,password,postCode,marketOption);
	}

	@Then("^User validates error messages of manadatory fields \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_validates_error_messages_of_manadatory_fields(String emailAddress, String password, String postCode, String marketOption) throws Throwable {
		signUpPage.validateSignUpFormFieldLevelErrors(emailAddress, password, postCode);
	}

	@Then("^User validates accepted format messages that display for each sign up field$")
	public void user_validates_accepted_format_messages_that_display_for_each_sign_up_field() throws Throwable {
		signUpPage.verifySignUpFormFieldFormats();
	}

	@When("^User validates sign up form field labels$")
	public void user_validates_sign_up_form_field_labels() throws Throwable {
		signUpPage.validateSignUpFormFieldLabels();
	}
	
	@And("^User click the submit button$")
	public void clickSubmitButton() throws Throwable {
		signUpPage.clickSubmitButton();
	}
}