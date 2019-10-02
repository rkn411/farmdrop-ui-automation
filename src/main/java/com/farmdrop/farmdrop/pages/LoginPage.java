package com.farmdrop.farmdrop.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.farmdrop.farmdrop.framework.utilities.Assertion;
import com.farmdrop.farmdrop.framework.utilities.SeleniumUIWrappers;

public class LoginPage extends BasePage{
	
	public LoginPage(WebDriver driver) {
		super(driver);
	}

	@FindBy(xpath="//a[text()='Sign up']") private WebElement signUpLink;
	@FindBy(xpath="//a[contains(@class,'admin__accountLink')]") private WebElement accountToggleLink;
	
	/**
	 * Method to click on signup link
	 */
	public void clickSignUpLink() {
		SeleniumUIWrappers.clickElement(signUpLink);
		Assertion.assertTrue(new SignUpPage(driver).isPageDisplayed(), "Either Sign up link is not working or Sign up for is not displayed");
		
	}
	
	public void clickAccountToggleLink() {
		SeleniumUIWrappers.clickElement(accountToggleLink);
	}
	
	/**
	 * Method to verify page displayed
	 * @return
	 */
	public boolean isPageDisplayed() {
		return SeleniumUIWrappers.waitForElementToDisplay(signUpLink);
	}
}
