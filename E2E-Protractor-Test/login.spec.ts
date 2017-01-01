
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('Demo End to End Test With Protractor', () => {
  beforeEach(() => {
    browser.get('http://localhost:3000/');
  });

  it('Should login with valid credential', () => {
    element(by.css('#username')).sendKeys('t');
    element(by.css('#password')).sendKeys('t');

    element(by.id('login')).click();

browser.pause();

    expect(element(by.id('greeting')).getText()).toContain('you are currently logged in!');

  });

});