$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("signup.feature");
formatter.feature({
  "line": 2,
  "name": "User SignUp",
  "description": "This feature deals with the User SignUp form functionality of the application",
  "id": "user-signup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signupfeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Validate whether user is able to sign up form drop with prefered email",
  "description": "",
  "id": "user-signup;validate-whether-user-is-able-to-sign-up-form-drop-with-prefered-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@signuphappyflow"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User fills sign up form fields \"\u003cemailaddress\u003e\" \"\u003cpassword\u003e\" \"\u003cpostcode\u003e\" \"\u003cmarketoption\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User navigates to account dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User logout from application by clicking on logout button",
  "keyword": "When "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "user-signup;validate-whether-user-is-able-to-sign-up-form-drop-with-prefered-email;",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password",
        "postcode",
        "marketoption"
      ],
      "line": 16,
      "id": "user-signup;validate-whether-user-is-able-to-sign-up-form-drop-with-prefered-email;;1"
    },
    {
      "cells": [
        "fdtest4@gmail.com",
        "test@123",
        "W1A 0AX",
        "No thanks"
      ],
      "line": 17,
      "id": "user-signup;validate-whether-user-is-able-to-sign-up-form-drop-with-prefered-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4276903,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User navigates to SignUp form page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_navigates_to_SignUp_form_page()"
});
formatter.result({
  "duration": 10506338555,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate whether user is able to sign up form drop with prefered email",
  "description": "",
  "id": "user-signup;validate-whether-user-is-able-to-sign-up-form-drop-with-prefered-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@signuphappyflow"
    },
    {
      "line": 1,
      "name": "@signupfeature"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User fills sign up form fields \"fdtest4@gmail.com\" \"test@123\" \"W1A 0AX\" \"No thanks\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User navigates to account dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User logout from application by clicking on logout button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "fdtest4@gmail.com",
      "offset": 32
    },
    {
      "val": "test@123",
      "offset": 52
    },
    {
      "val": "W1A 0AX",
      "offset": 63
    },
    {
      "val": "No thanks",
      "offset": 73
    }
  ],
  "location": "SingUpPageStepDefinitions.fillEmailSignUpForm(String,String,String,String)"
});
formatter.result({
  "duration": 1603964925,
  "status": "passed"
});
formatter.match({
  "location": "SingUpPageStepDefinitions.clickSubmitButton()"
});
formatter.result({
  "duration": 1145255414,
  "status": "passed"
});
formatter.match({
  "location": "AccountDashboardStepDefinitions.user_navigates_to_account_dashboard_page()"
});
formatter.result({
  "duration": 1162808,
  "status": "passed"
});
formatter.match({
  "location": "AccountDashboardStepDefinitions.user_logout_from_application_by_clicking_on_logout_button()"
});
formatter.result({
  "duration": 1034608895,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //a[contains(text(),\u0027accountLink\u0027]) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//a[contains(text(),\u0027accountLink\u0027])\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MYPERSONAL-REDD\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Reddi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55384}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b3136701f3bed6ff32a567c160ed8cc7\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027accountLink\u0027])}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat com.farmdrop.farmdrop.framework.utilities.SeleniumUIWrappers.waitForElementToDisplay(SeleniumUIWrappers.java:46)\r\n\tat com.farmdrop.farmdrop.framework.utilities.SeleniumUIWrappers.clickElement(SeleniumUIWrappers.java:26)\r\n\tat com.farmdrop.farmdrop.pages.AccountDashboardPage.clickAccountIcon(AccountDashboardPage.java:22)\r\n\tat com.farmdrop.farmdrop.stepdefinitions.AccountDashboardStepDefinitions.user_logout_from_application_by_clicking_on_logout_button(AccountDashboardStepDefinitions.java:24)\r\n\tat ✽.When User logout from application by clicking on logout button(signup.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 88747,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Validate error messages when user tries to sing up without data in mandatory fields",
  "description": "",
  "id": "user-signup;validate-error-messages-when-user-tries-to-sing-up-without-data-in-mandatory-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@signupnegativeflow"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User fills sign up form fields \"\u003cemailaddress\u003e\" \"\u003cpassword\u003e\" \"\u003cpostcode\u003e\" \"\u003cmarketoption\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User validates error messages of manadatory fields \"\u003cemailaddress\u003e\" \"\u003cpassword\u003e\" \"\u003cpostcode\u003e\" \"\u003cmarketoption\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "user-signup;validate-error-messages-when-user-tries-to-sing-up-without-data-in-mandatory-fields;",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password",
        "postcode",
        "marketoption"
      ],
      "line": 26,
      "id": "user-signup;validate-error-messages-when-user-tries-to-sing-up-without-data-in-mandatory-fields;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "No thanks"
      ],
      "line": 27,
      "id": "user-signup;validate-error-messages-when-user-tries-to-sing-up-without-data-in-mandatory-fields;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 68266,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User navigates to SignUp form page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_navigates_to_SignUp_form_page()"
});
formatter.result({
  "duration": 31055575846,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(@class,\u0027loginButton\u0027)]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MYPERSONAL-REDD\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Reddi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55384}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b3136701f3bed6ff32a567c160ed8cc7\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(@class,\u0027loginButton\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat com.farmdrop.farmdrop.framework.utilities.SeleniumUIWrappers.waitForElementToDisplay(SeleniumUIWrappers.java:46)\r\n\tat com.farmdrop.farmdrop.pages.LandingPage.clickLoginButton(LandingPage.java:22)\r\n\tat com.farmdrop.farmdrop.stepdefinitions.LoginStepDefinitions.user_navigates_to_SignUp_form_page(LoginStepDefinitions.java:21)\r\n\tat ✽.Given User navigates to SignUp form page(signup.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate error messages when user tries to sing up without data in mandatory fields",
  "description": "",
  "id": "user-signup;validate-error-messages-when-user-tries-to-sing-up-without-data-in-mandatory-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupfeature"
    },
    {
      "line": 19,
      "name": "@signupnegativeflow"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User fills sign up form fields \"\" \"\" \"\" \"No thanks\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User validates error messages of manadatory fields \"\" \"\" \"\" \"No thanks\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    },
    {
      "val": "",
      "offset": 35
    },
    {
      "val": "",
      "offset": 38
    },
    {
      "val": "No thanks",
      "offset": 41
    }
  ],
  "location": "SingUpPageStepDefinitions.fillEmailSignUpForm(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SingUpPageStepDefinitions.clickSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 52
    },
    {
      "val": "",
      "offset": 55
    },
    {
      "val": "",
      "offset": 58
    },
    {
      "val": "No thanks",
      "offset": 61
    }
  ],
  "location": "SingUpPageStepDefinitions.user_validates_error_messages_of_manadatory_fields(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 52338,
  "status": "passed"
});
});