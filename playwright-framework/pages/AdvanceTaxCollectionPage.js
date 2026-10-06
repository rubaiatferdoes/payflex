const { advanceTaxCollectionLocators } = require('../locators/advanceTaxCollectionLocators');

/**
 * Page Object for the Advance Tax Collection screen
 * (PayFlex > Functions > Advance Tax Collection).
 */
class AdvanceTaxCollectionPage {
  constructor(page) {
    this.page = page;

    // Left sidebar
    this.functionsMenuItem = page.locator(advanceTaxCollectionLocators.functionsMenuItem);
    this.advanceTaxMenuItem = page.locator(advanceTaxCollectionLocators.advanceTaxMenuItem);
    // Employee Information (magnifier button next to the ID field opens the "Select Employee" modal)
    this.employeeSearchButton = page
      .locator(advanceTaxCollectionLocators.employeeIdInput)
      .locator('..')
      .getByRole('button');

    // Select Employee modal
    this.employeeNameInput = page.locator(advanceTaxCollectionLocators.employeeNameInput);
    this.modalSearchButton = page.locator(advanceTaxCollectionLocators.modalSearchButton);
    this.resultRow = page.locator(advanceTaxCollectionLocators.resultRow);
    // Advance Tax Collection Details
    this.collectionAmountInput = page.locator(advanceTaxCollectionLocators.collectionAmountInput);
    this.fileInput = page.locator(advanceTaxCollectionLocators.fileInput);
    // Toolbar
    this.saveButton = page.locator(advanceTaxCollectionLocators.saveButton);
    // Success toast shown after saving
    this.successToast = page.locator(advanceTaxCollectionLocators.successToast);
  }

  /** Open Functions > Advance Tax Collection from the left sidebar. */
  async open() {
    // The Functions submenu is usually expanded already; only click if not.
    if (!(await this.advanceTaxMenuItem.first().isVisible())) {
      await this.functionsMenuItem.click();
    }
    await this.advanceTaxMenuItem.first().click();
  }

  /** Open the employee picker, search by name and select the first matching row. */
  async searchAndSelectEmployee(name) {
    await this.employeeSearchButton.click();
    await this.employeeNameInput.fill(name);
    await this.modalSearchButton.click();
    await this.resultRow
      .filter({ hasText: name })
      .first()
      .getByRole('cell', { name })
      .dblclick();
    // The modal should close and the main form should show the picked employee
    await this.employeeNameInput.waitFor({ state: 'hidden', timeout: 10 * 1000 });
  }

  async enterAmount(amount) {
    await this.collectionAmountInput.fill(String(amount));
  }

  async uploadFile(filePath) {
    await this.fileInput.setInputFiles(filePath);
  }

  async save() {
    await this.saveButton.click();
  }
}

module.exports = { AdvanceTaxCollectionPage };
