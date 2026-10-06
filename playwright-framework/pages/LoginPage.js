const { loginLocators } = require('../locators/loginLocators');
const { ENV } = require('../config/env');

/** Page Object for the login screen. */
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator(loginLocators.usernameInput);
    this.passwordInput = page.locator(loginLocators.passwordInput);
    this.loginButton = page.locator(loginLocators.loginButton);
  }

  async navigate() {
    await this.page.goto(ENV.LOGIN_URL);
  }

  async isAtPage() {
    return this.usernameInput.isVisible();
  }

  async fillUsername(username) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async waitForSuccessfulLogin() {
    await this.page.waitForURL(/launcher-app\/feature\/userapp/, { timeout: 30 * 1000 });
  }
}

module.exports = { LoginPage };
