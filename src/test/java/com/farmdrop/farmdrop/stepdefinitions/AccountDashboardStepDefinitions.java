package com.farmdrop.farmdrop.stepdefinitions;

import com.farmdrop.farmdrop.pages.AccountDashboardPage;
import com.formdrop.formdrop.driverfactory.DriverFactory;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AccountDashboardStepDefinitions {
	private AccountDashboardPage accountDashboardPage;
	
	
	public AccountDashboardStepDefinitions() {
		accountDashboardPage=new AccountDashboardPage(DriverFactory.getDriver());
	}
	

@Then("^User navigates to account dashboard page$")
public void user_navigates_to_account_dashboard_page() {
	accountDashboardPage.isPageDisplayed();
}

@When("^User logout from application by clicking on logout button$")
public void user_logout_from_application_by_clicking_on_logout_button() {
	accountDashboardPage.clickAccountIcon();
	accountDashboardPage.clickLogoutBtn();
}


}
