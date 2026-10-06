
const advanceTaxCollectionLocators = {
  functionsMenuItem: '.nav-label:has-text("Functions")',
  advanceTaxMenuItem: 'role=button[name="Advance Tax Collection"]',
  employeeIdInput: '[placeholder="Enter Employee ID"]',

  // Select Employee modal
  employeeNameInput: '[placeholder="Enter Name"]',
  modalSearchButton: 'role=button[name="Search"]',
  resultRow: 'role=row',

  // Advance Tax Collection Details
  collectionAmountInput: 'role=spinbutton[name="Enter collection amount"]',
  fileInput: 'input[type="file"]',

  // Toolbar
  saveButton: 'role=button[name="Save"]',
  // Success message shown after saving
  successToast: 'text=Advance Tax Collection Created Successfully',
};

module.exports = { advanceTaxCollectionLocators };
