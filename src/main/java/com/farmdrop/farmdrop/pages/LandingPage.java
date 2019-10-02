package com.farmdrop.farmdrop.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.farmdrop.farmdrop.framework.utilities.Assertion;
import com.farmdrop.farmdrop.framework.utilities.SeleniumUIWrappers;

public class LandingPage extends BasePage{
	
	public LandingPage(WebDriver driver) {
		super(driver);
	}
	
	@FindBy(xpath="//a[contains(@class,'loginButton')]") private WebElement loginBtn;
	/**
	 * Method to click on login button
	 * @return
	 */
	public LoginPage clickLoginButton() {
		SeleniumUIWrappers.waitForElementToDisplay(loginBtn);
		SeleniumUIWrappers.clickElement(loginBtn);
		Assertion.assertTrue(new LoginPage(driver).isPageDisplayed(), "Login page is not displayed");
		return new LoginPage(driver);
	}
}
