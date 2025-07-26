const { Key } = require('selenium-webdriver');

class SeleniumActions {
  constructor(driver) {
    this.driver = driver;
  }

  async findElements(locator) {
    return await this.driver.findElements(locator);
  }

  async navigateTo(url) {
  await this.driver.get(url);
  }

  async click(locator) {
    const element = await this.driver.findElement(locator);
    await element.click();
  }

  async clickWithJs(locator) {
    const element = await this.driver.findElement(locator);
    await this.driver.executeScript("arguments[0].click();", element);
  }

  async waitFor(action, condition, timeout = 10000) {
    try {
      await this.driver.wait(async () => {
        await action();
        return await condition();
      }, timeout);
    } catch (err) {
      throw new Error('WaitForTimeout: ' + err.message);
    }
  }

  async waitForCondition(condition, timeout = 10000) {
    try {
      await this.driver.wait(async () => {
        return await condition();
      }, timeout);
    } catch (err) {
      throw new Error('WaitForTimeout: ' + err.message);
    }
  }

  async isFilled(locator) {
    try {
      const element = await this.driver.wait(
        async () => {
          const el = await this.driver.findElement(locator);
          return (await el.isDisplayed()) ? el : null;
        },
        5000
      );
      const value = await element.getAttribute('value');
      return value !== null && value !== '';
    } catch (err) {
      throw new Error('WebDriverError: ' + err.message);
    }
  }

  async sendKeys(locator, text, clearingTheTextField = true) {
    const element = await this.driver.wait(
      async () => {
        const el = await this.driver.findElement(locator);
        return (await el.isDisplayed()) ? el : null;
      },
      10000
    );

    if (clearingTheTextField) {
      await element.clear();
      await element.sendKeys(text);
    } else {
      await element.sendKeys(text);
    }
  }

  async writeAndValidate(text, locator) {
    await this.waitFor(
      async () => await this.sendKeys(locator, text),
      async () => await this.isFilled(locator)
    );
  }

  async sendEnter() {
    try {
      await this.driver.actions().sendKeys(Key.ENTER).perform();
    } catch (err) {
      throw new Error('WebDriverError: ' + err.message);
    }
  }
/**
   * Waits until the web element located by 'locator' is visible.
   * @param {Object} locator - Selenium By locator object.
   * @param {number} timeout - Timeout in ms (default 10000).
   * @returns {Promise<WebElement>}
   */
  async waitUntilWebElementIsVisible(locator, timeout = 10000) {
    try {
      return await this.driver.wait(
        until.elementIsVisible(await this.driver.findElement(locator)),
        timeout
      );
    } catch (err) {
      throw new Error(`ElementNotVisible: ${locator.toString()} - ${err.message}`);
    }
  }

  /**
   * Checks if the web element located by 'locator' is displayed.
   * @param {Object} locator - Selenium By locator object.
   * @returns {Promise<boolean>}
   */
  async isWebElementDisplayed(locator) {
    const element = await this.driver.findElement(locator);
    return await element.isDisplayed();
  }
}

module.exports = SeleniumActions;