
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('protractor with typescript typings', () => {
  beforeEach(() => {
    browser.get('http://www.angularjs.org');
  });

  xit('should greet the named user', () => {
    element(by.model('yourName')).sendKeys('Julie');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  xit('should list todos', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an angular app');
  });
});