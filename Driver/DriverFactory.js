const { Builder } = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');

const BrowserType = {
  Chrome: 'chrome',
  Firefox: 'firefox'
};

class DriverFactory {
  async createDriver(browserType) {
    switch (browserType) {
      case BrowserType.Chrome:
        return this.createChromeDriver();
      case BrowserType.Firefox:
        return this.createFirefoxDriver();
      default:
        throw new Error(`Unsupported browser type: ${browserType}`);
    }
  }

  createChromeDriver() {
    return new Builder()
      .forBrowser('chrome')
      .build();
  }

  createFirefoxDriver() {
    return new Builder()
      .forBrowser('firefox')
      .build();
  }
}

module.exports = { DriverFactory, BrowserType };