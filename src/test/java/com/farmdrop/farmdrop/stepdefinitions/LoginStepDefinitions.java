package com.farmdrop.farmdrop.stepdefinitions;

import com.farmdrop.farmdrop.pages.LandingPage;
import com.farmdrop.farmdrop.pages.LoginPage;
import com.formdrop.formdrop.driverfactory.DriverFactory;

import cucumber.api.java.en.Given;

public class LoginStepDefinitions{
	
	private LandingPage landingPage;
	private LoginPage loginPage;
	
	public LoginStepDefinitions() {
		landingPage=new LandingPage(DriverFactory.getDriver());
		loginPage=new LoginPage(DriverFactory.getDriver());
	}
	
	@Given("^User navigates to SignUp form page$")
	public void user_navigates_to_SignUp_form_page() throws Throwable {
		landingPage.clickLoginButton();
		loginPage.clickSignUpLink();
	}
}
