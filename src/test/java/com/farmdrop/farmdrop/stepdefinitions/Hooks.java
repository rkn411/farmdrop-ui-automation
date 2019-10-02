package com.farmdrop.farmdrop.stepdefinitions;

import com.farmdrop.farmdrop.framework.utilities.Assertion;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before
    public void beforeScenario(Scenario scenario) {
		System.out.println("Before scenario method is executed");
		Assertion.IntializeSoftAssertion();
    }
    @After
    public void afterScenario(Scenario scenario) {
    	System.out.println("After scenario method is executed");
    	Assertion.getSoftAssert().assertAll();
    }
}
