# Mobiik Automation Framework

This project is an automated test framework for the TodoMVC web app using Selenium WebDriver and Mocha.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)
- Google Chrome or Mozilla Firefox browser

## Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/temokssl2/mobiik-test.git
   cd mobiik-test
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

## Running the Tests

1. **Run all tests**
   ```sh
   npm test
   ```

2. **View the test report**
   - After running, open `mochawesome-report/mochawesome.html` in your browser to see the results.

## Project Structure

- `test/` - Test files (main entry: `TodoMvcTest.js`)
- `Pages/` - Page Object Models
- `utils/` - Utility classes (e.g., SeleniumActions)
- `screenshots/` - Screenshots on test failure

## Notes

- You can change the browser or test settings in the configuration files.
- Make sure your browser drivers (`chromedriver`, `geckodriver`) are installed via npm.

---
```# Mobiik Automation Framework

This project is an automated test framework for the TodoMVC web app using Selenium WebDriver and Mocha.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)
- Google Chrome or Mozilla Firefox browser

## Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/temokssl2/mobiik-test.git
   cd mobiik-test
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

## Running the Tests

1. **Run all tests**
   ```sh
   npm test
   ```

2. **View the test report**
   - After running, open `mochawesome-report/mochawesome.html` in your browser to see the results.

## Project Structure

- `test/` - Test files (main entry: `TodoMvcTest.js`)
- `Pages/` - Page Object Models
- `utils/` - Utility classes (e.g., SeleniumActions)
- `screenshots/` - Screenshots on test failure

## Notes

## Notes

- All required dependencies, including Selenium WebDriver and browser drivers (`chromedriver`, `geckodriver`), are listed in `package.json`.
- If you ever need to install them manually, run:
  ```sh
  npm install selenium-webdriver chromedriver geckodriver
  ```
- Running `npm install` in the project directory will install
