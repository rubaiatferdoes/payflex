/** Page Object for the launcher home screen (app tiles). */
class HomePage {
  constructor(page) {
    this.page = page;
  }

  async openApp(name) {
    await this.page.getByText(name, { exact: true }).first().click();
  }
}

module.exports = { HomePage };
