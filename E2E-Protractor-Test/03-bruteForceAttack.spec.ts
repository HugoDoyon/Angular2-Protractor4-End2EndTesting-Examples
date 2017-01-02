
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

//4 digit code = 10 000 possibility
let numberOfPossibility = 1000; 
let passwordtoHack:any = 999;

function padZeroLeft(nr, n){
    return Array( n - String(nr).length + 1).join('0') + nr;
}

describe('Register and Open Account Page', () => {
  beforeEach(() => {     
    browser.get('http://localhost:3000/register');
    browser.executeScript('window.localStorage.clear();'); 
  });

  it('Should Open Account When valid user data is provided', () => {
    element(by.css('#firstName')).sendKeys('Tony');
    element(by.css('#lastName')).sendKeys('Accurso');
    element(by.css('#username')).sendKeys('Taccurso');
    element(by.css('#password')).sendKeys(passwordtoHack);
    element(by.id('register')).click();
    
    expect(element(by.css('.alert-success')).getText()).toContain('Registration successful');
  });

});

describe('Brute Force Attach of Login Page', () => {
  beforeAll(() => {
    browser.get('http://localhost:3000/login');
    $('#username').sendKeys('Taccurso');
  });

  for (let password:any = 0; password < numberOfPossibility; password++) {
    it('Trying password "'+ password + '"', () => {
        //TODO : make it work faster for 4 digit
        //TODO : set real value for possibility and password to hack
        //TODO : use Zero pad function
        //TODO : Break when password is found and dispay a large firework with the password and the number of test/sec
        //PERF : currently running a 1.3 test/sec (726sec for 1000 tests)
        //TODO : test it with SauceLab in paralelle
        //$('#password').sendKeys(password < numberOfPossibility ? this.padLeft(password, 4) : password);
        element(by.id('password')).sendKeys(password);
        element(by.id('login')).click();

        expect(element(by.id('greeting')).isDisplayed()).toBeTruthy();
    });
  }


});