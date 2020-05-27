import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
import { Given } from "cucumber";
import { watchFile } from "fs";
import { time } from "console";
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^I am on "(.*?)" search page$/, async (text) => {
        await expect(browser.getTitle()).to.eventually.equal("Google");
});

When(/^I type "(.*?)"$/, async (text) => {
    await search.searchTextBox.sendKeys(text);
});

Then(/^I click on outline$/, async () => {
    await search.outline.click();
});


When(/^I click on search button$/, async () => {

    await search.searchButton.click();

});

Then(/^I click on first search result$/, async () => {
    await search.first.click();
});
/*
Then(/^I click on login$/, async () => {
    await search.login.click();
});

When(/^I type username "(.*?)"$/, async (text) => {
    await search.username.sendKeys(text);
});

Then(/^I click on continue$/, async () => {
    await search.continue.click();
});

Then(/^I click on password$/, async () => {
    await search.password.click();
});

When(/^I type password "(.*?)"$/, async (text) => {
    await search.passwordbox.sendKeys(text);
});

Then(/^I click on login button$/, async () => {
    await search.loginbutton.click();
});
*/
When(/^I click on from city$/, async () => {
    await search.fromcity.click();
});

When(/^I type from city "(.*?)"$/, async (text) => {
    await search.enterFromCity.sendKeys(text);
    await browser.switchTo().activeElement().sendKeys(protractor.Key.DOWN);
    await browser.switchTo().activeElement().sendKeys(protractor.Key.ENTER);

});

When(/^I type to city "(.*?)"$/, async (text) => {
    await search.enterToCity.sendKeys(text);
    await browser.switchTo().activeElement().sendKeys(protractor.Key.DOWN);
    await browser.switchTo().activeElement().sendKeys(protractor.Key.ENTER);
});


Then(/^I click on search$/, async () => {
    await browser.switchTo().activeElement().sendKeys(protractor.Key.TAB);
    await browser.switchTo().activeElement().sendKeys(protractor.Key.TAB);
    await browser.switchTo().activeElement().sendKeys(protractor.Key.TAB);
    await browser.switchTo().activeElement().sendKeys(protractor.Key.TAB);
    browser.sleep(1000);
    await search.search.click();
    browser.sleep(6000);
});
