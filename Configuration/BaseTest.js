const { DriverFactory, BrowserType } = require('../DriverFactory');

class BaseTest {
  constructor(browser = BrowserType.Chrome) {
    this.browser = browser;
    this.driver = null;
  }

  async startDriver() {
    const factory = new DriverFactory();
    this.driver = await factory.createDriver(this.browser);
  }

  async quitDriver() {
    if (this.driver) {
      await this.driver.quit();
      this.driver = null;
    }
  }
}

module.exports = BaseTest;