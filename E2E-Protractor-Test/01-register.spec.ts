
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('Register and Open Account Page', () => {
  beforeEach(() => {     
    browser.get('http://localhost:3000/register');
    browser.executeScript('window.localStorage.clear();'); 
  });

  it('Should Open Account When valid user data is provided', () => {
    element(by.css('#firstName')).sendKeys('Tony');
    element(by.css('#lastName')).sendKeys('Accurso');
    element(by.css('#username')).sendKeys('Taccurso');
    element(by.css('#password')).sendKeys('0123');
    element(by.id('register')).click();
    
    expect(element(by.css('.alert-success')).getText()).toContain('Registration successful');
  });
  
});