package com.formdrop.formdrop.driverfactory;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.SessionNotCreatedException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import com.farmdrop.farmdrop.config.ConfigFileReader;

public class DriverFactory {

	public static WebDriver driver;
	private static String browser;
	static String currentPath = System.getProperty("user.dir");
	private String driversPath = currentPath + "\\src\\test\\resources\\drivers\\";

	@BeforeClass
	public void launchBrowser() {
		boolean headLessState = Boolean.parseBoolean(new ConfigFileReader().getProperty("headless"));

		browser = new ConfigFileReader().getProperty("browserName");

		switch (browser.toLowerCase()) {
		case "ie":
			System.setProperty("webdriver.ie.driver", driversPath + "IEDriverServer.exe");
			driver = new InternetExplorerDriver();
			break;
		case "chrome":
			System.setProperty("webdriver.chrome.driver", driversPath + "chromedriver.exe");
			if (headLessState) {
				ChromeOptions options = new ChromeOptions();
				options.addArguments("--headless");
				driver = new ChromeDriver(options);
			} else {
				driver = new ChromeDriver();
			}

			break;
		case "firefox":
			System.setProperty("webdriver.firefox.driver", driversPath + "geckodriver.exe");
			if (headLessState) {
				FirefoxOptions options = new FirefoxOptions();
				options.addArguments("--headless");
				driver = new FirefoxDriver(options);
			} else {
				driver = new FirefoxDriver();
			}
			break;
		default:
			System.out.println("Invalid Choice, plese give valid browser name");
			System.exit(0);
			break;
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		driver.get("https://staging-web.farmdrop.com/");
	}

	@AfterClass
	public static void closeDriver() {
		if (driver != null) {
			try {
				driver.quit();
			} catch (NoSuchMethodError nsme) {
				nsme.printStackTrace();
			} catch (NoSuchSessionException nsse) {
				nsse.printStackTrace();
			} catch (SessionNotCreatedException snce) {
				snce.printStackTrace();
			}
			driver = null;
		}
	}

	public static WebDriver getDriver() {
		return driver;
	}
}
