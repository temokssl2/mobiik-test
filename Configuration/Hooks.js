const { DriverFactory, BrowserType } = require('../Driver/DriverFactory');
const SeleniumActions = require('../utils/SeleniumActions');
const { takeScreenshot } = require('../utils/ScreenshotUtil');

class Hooks {
  static async globalSetup(context) {
    const factory = new DriverFactory();
    context.driver = await factory.createDriver(BrowserType.Chrome);
    context.seleniumActions = new SeleniumActions(context.driver);
  }

  static async globalTeardown(context) {
    if (context.driver) {
      await context.driver.quit();
    }
  }

  static async afterEach(context, test) {
    if (test.state === 'failed' && context.driver) {
      await takeScreenshot(context.driver, test.fullTitle());
    }
  }
}

module.exports = Hooks;