package com.farmdrop.farmdrop.framework.utilities;

import org.testng.Assert;
import org.testng.asserts.SoftAssert;

public class Assertion {

	private static SoftAssert softAssertion;

	public static void IntializeSoftAssertion() {
		softAssertion = new SoftAssert();
	}

	public static void assertEquals(String expected, String actual, String message) {
		Assert.assertEquals(expected, actual, message);
	}

	public static void assertTrue(boolean actual, String message) {
		Assert.assertTrue(actual, message);
	}

	public static void assertFalse(boolean actual, String message) {
		Assert.assertFalse(actual, message);
	}

	public static void softAssertEquals(String expected, String actual, String message) {
		softAssertion.assertEquals(expected, actual, message);
	}

	public static void softAssertTrue(boolean actual, String message) {
		softAssertion.assertTrue(actual, message);
	}

	public static void softAssertFalse(boolean actual, String message) {
		softAssertion.assertFalse(actual, message);
	}

	public static void assertAll() {
		softAssertion.assertAll();
	}

	public static SoftAssert getSoftAssert() {
		return softAssertion;
	}
}
