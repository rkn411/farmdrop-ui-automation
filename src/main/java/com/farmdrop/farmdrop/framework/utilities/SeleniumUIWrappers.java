package com.farmdrop.farmdrop.framework.utilities;

import java.util.NoSuchElementException;

import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.formdrop.formdrop.driverfactory.DriverFactory;

public class SeleniumUIWrappers {

	private static int MIN_WAIT = 1;
	private static WebDriverWait wait = new WebDriverWait(DriverFactory.getDriver(), 60);

	/**
	 * Method to click element
	 * 
	 * @param element
	 */
	public static void clickElement(WebElement element) {
		waitForElementToDisplay(element);
		element.click();
	}
	/**
	 * Method to set text
	 * @param element
	 * @param inputText
	 */
	public static void setText(WebElement element, String inputText) {
		element.sendKeys(inputText);
	}
	/**
	 * Method to select the radio button
	 * @param element
	 */
	public static void SelectRadioButtonOrCheckBox(WebElement element) {
		if (!element.isSelected()) {
			element.click();
		}
	}
	/**
	 * Method to wait for element to display
	 * @param element
	 * @return
	 */
	public static boolean waitForElementToDisplay(WebElement element) {
		Exception exception = null;
		for (int counter = 0; counter <= 100; counter++) {
			try {
				customSleep(MIN_WAIT);
				element.isDisplayed();
				if (element.isEnabled()) {
					return true;
				}
			} catch (NoSuchElementException e) {
				exception = e;
			} catch (StaleElementReferenceException e) {
				exception = e;
			}
		}
		exception.printStackTrace();
		return false;
	}

	public static void customSleep(long time) {
		try {
			Thread.sleep(1000 * time);
		} catch (InterruptedException ie) {

		}
	}
}
