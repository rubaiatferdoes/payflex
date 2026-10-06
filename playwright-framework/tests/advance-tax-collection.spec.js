const path = require('path');
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { AdvanceTaxCollectionPage } = require('../pages/AdvanceTaxCollectionPage');
const { qaUser, advanceTaxCollection } = require('../test-data/users.json');

const UPLOAD_FILE = path.join(__dirname, '..', 'test-data', 'uploads', 'whale.png');

test.describe('Advance Tax Collection', () => {
  test('collect advance tax for an employee', async ({ page }) => {
    // Login
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await expect(loginPage.isAtPage()).resolves.toBeTruthy();
    await loginPage.fillUsername(qaUser.username);
    await loginPage.fillPassword(qaUser.password);
    await loginPage.clickLoginButton();
    await loginPage.waitForSuccessfulLogin();

    // Open PayFlex from the launcher
    const homePage = new HomePage(page);
    await homePage.openApp('PayFlex');

    // Advance Tax Collection
    const taxPage = new AdvanceTaxCollectionPage(page);
    await taxPage.open();

    // Search the employee by name and select them from the results
    await taxPage.searchAndSelectEmployee(advanceTaxCollection.employeeName);

    // Enter the collection amount, upload the file, save and verify the success message
    await taxPage.enterAmount(advanceTaxCollection.amount);
    await taxPage.uploadFile(UPLOAD_FILE);
    await taxPage.save();
    await expect(taxPage.successToast).toBeVisible();
  });
});
