const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

/**
 * Takes a screenshot using the provided driver and saves it to the screenshots directory.
 * @param {WebDriver} driver
 * @param {string} testName
 */
async function takeScreenshot(driver, testName) {
  const screenshotDir = path.resolve(__dirname, '../screenshots');
  await mkdirp.mkdirp(screenshotDir);
  const screenshot = await driver.takeScreenshot();
  const filePath = path.join(
    screenshotDir,
    `${testName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`
  );
  fs.writeFileSync(filePath, screenshot, 'base64');
  console.log(`Screenshot saved: ${filePath}`);
}

module.exports = { takeScreenshot };