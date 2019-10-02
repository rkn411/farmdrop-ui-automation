package com.farmdrop.farmdrop.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.farmdrop.farmdrop.framework.utilities.Assertion;
import com.farmdrop.farmdrop.framework.utilities.SeleniumUIWrappers;

public class SignUpPage extends BasePage{
	
	public SignUpPage(WebDriver driver) {
		super(driver);
	}

	@FindBy(id="email") private WebElement emailTextField;
	@FindBy(id="password") private WebElement pwdTextField;
	@FindBy(id="zipcode") private WebElement postCodeTextField;
	@FindBy(id="//label[text()='Add me to the mailing list']") private WebElement mailingListRadioBtn;
	@FindBy(xpath="//label[text()='No, thanks']") private WebElement noThanksRadioBtn;
	@FindBy(id="email-signup-form-submit") private WebElement submitBtn;
	@FindBy(xpath="//div[contains(@class,'session__errors')]") private WebElement singUpFormErrorsContainer;
	
	/**
	 * Method to fill the signup form
	 * @param email
	 * @param password
	 * @param zipCode
	 * @param marketingOption
	 */
	public void fillEmailSignUpForm(String email,String password,String zipCode,String marketingOption) {
		SeleniumUIWrappers.setText(emailTextField,email);
		SeleniumUIWrappers.setText(pwdTextField,password);
		SeleniumUIWrappers.setText(postCodeTextField,zipCode);
		
		if("No Thanks".equalsIgnoreCase(marketingOption)) {
			SeleniumUIWrappers.clickElement(noThanksRadioBtn);
		}else if("mailing list".equalsIgnoreCase(marketingOption)){
			SeleniumUIWrappers.clickElement(mailingListRadioBtn);
		}
	}
	
	private WebElement singUpFormErrorMessages(String errorMessage) {
		return singUpFormErrorsContainer.findElement(By.xpath("//li[text()=\""+errorMessage+"\"]"));
	}
	/**
	 * Method to verify field level errors for signup form
	 * @param email
	 * @param password
	 * @param zipCode
	 */
	public void validateSignUpFormFieldLevelErrors(String email,String password,String zipCode) {
		if("".equals(email)) {
			Assertion.assertTrue(SeleniumUIWrappers.waitForElementToDisplay(singUpFormErrorMessages("Email can't be blank")), "Email can;t be blank error message is not displayed");
		}
		
		if("".equals(password)) {
			Assertion.assertTrue(SeleniumUIWrappers.waitForElementToDisplay(singUpFormErrorMessages("Password can't be blank")), "Password can't be blank error message is not displayed");
		}
		
		if("".equals(zipCode)) {
			Assertion.assertTrue(SeleniumUIWrappers.waitForElementToDisplay(singUpFormErrorMessages("Zipcode can't be blank")), "Zipcode can't be blank error message is not displayed");
		}
	}
	
	public void verifySignUpFormFieldFormats() {
		System.out.print("title of"+emailTextField.getAttribute("title"));
	}
	/**
	 * Method to validate signup form fields
	 */
	public void validateSignUpFormFieldLabels() {
		Assertion.softAssertTrue(emailTextField.getAttribute("placeholder").equals("Email address"), "Email addrress field label is not matched");
		Assertion.softAssertTrue(pwdTextField.getAttribute("placeholder").equals("Password"), "Password field label is not matched");
		Assertion.softAssertTrue(postCodeTextField.getAttribute("placeholder").equals("Postcode"), "Postcode field label is not matched");
		Assertion.softAssertTrue(postCodeTextField.getText().equals("Postcode"), "Let's fix the food chain");
	}
	/**
	 * Method to click on submit button
	 */
	
	public void clickSubmitButton() {
		SeleniumUIWrappers.clickElement(submitBtn);
	}
	
	public boolean isPageDisplayed() {
		return SeleniumUIWrappers.waitForElementToDisplay(submitBtn);
	}
}
