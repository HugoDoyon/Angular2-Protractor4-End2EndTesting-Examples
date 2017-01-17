
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('Login Page', () => {
  beforeEach(() => {
    browser.get('http://localhost:3000/');
  });

  it('Should not login When invalid credential provided', () => {
    element(by.css('#username')).sendKeys('JDassin');
    element(by.css('#password')).sendKeys('MotDePasseInvalide');
    element(by.id('login')).click();
    
    expect(element(by.css('.alert-danger')).getText()).toContain('Username or password is incorrect');
  });

  it('Should login When valid credential provided', () => {
    element(by.css('#username')).sendKeys('Taccurso');
    element(by.css('#password')).sendKeys('0123');
    element(by.id('login')).click();

    expect(element(by.id('greeting')).getText()).toContain('you are currently logged in!');
  });

});