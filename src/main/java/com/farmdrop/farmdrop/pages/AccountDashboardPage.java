package com.farmdrop.farmdrop.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.farmdrop.farmdrop.framework.utilities.Assertion;
import com.farmdrop.farmdrop.framework.utilities.SeleniumUIWrappers;

public class AccountDashboardPage extends BasePage{
	
	public AccountDashboardPage(WebDriver driver) {
		super(driver);
	}
	@FindBy(xpath="//a[contains(text(),'accountLink'])") private WebElement accountICon;
	@FindBy(xpath="//a[contains(text(),'logout)")private WebElement logoutBtn;
	
	/**
	 * Method to click on user account profile
	 */
	public void clickAccountIcon() {
		SeleniumUIWrappers.clickElement(accountICon);
		Assertion.assertTrue(new SignUpPage(driver).isPageDisplayed(), "Either Sign up link is not working or Sign up for is not displayed");
		
	}
	/**
	 * Method to verify page displayed
	 * @return true
	 */
	public boolean isPageDisplayed() {
		return SeleniumUIWrappers.waitForElementToDisplay(accountICon);
	}
	/**
	 * Method to click on logout button
	 */
	public void clickLogoutBtn() {
		SeleniumUIWrappers.clickElement(logoutBtn);
	}
	
	
}
