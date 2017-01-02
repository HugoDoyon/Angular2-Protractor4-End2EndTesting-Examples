
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {'args': ['--disable-extensions --disable-plugins --disable-web-security']}
  },
  //specs: [ '01-*.spec.js', '02-*.spec.js' ],
  specs: [ '03-bruteForceAttack.spec.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  noGlobals: true,
  useAllAngular2AppRoots: true
};