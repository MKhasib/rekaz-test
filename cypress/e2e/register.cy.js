/*
 * Basic successful registartion
 * TODO: Check different invalid states
 */
describe('rekaz registeration', () => {
  beforeEach(() => {
    cy.visit('https://rekaz.io');
    cy.clearCookies();
  });
  describe('Desktop', () => {
    it('should sign up through main page', () => {
      // Navigate to register page
      cy.viewport('macbook-16');
      cy.get('[data-id="9f66eb2"]').first().click();
      // Starts onboarding
      cy.get('button').contains('متابعة').click();
      
      // Register store manager details
      cy.get('#Input_FullName').type('Test user');
      const randomToken = Math.random().toString(36).substring(2, 10);
      const email = `test1${randomToken}@gmail.com`;

      cy.get('#Input_EmailAddress').type(email);
      cy.get('#Input_MobileNumber').type('972599999999');
      cy.get('#Input_Password').type('testpassword123#');
      cy.get('[type="submit"]').click();
      
      // Register busniess info
      cy.get('#Input_BusinessName').type('Test project');
      cy.get('button').contains('1-5 موظفين').click();
      cy.get('button').contains('متابعة').click();

      // Register service info
      cy.get('button').contains('شقق وفنادق').click();
      cy.get('#Booking_Input_Service_Name').type('Test service');
      cy.get('#Booking_Input_Service_Price').type('10');
      cy.get('button').contains('حفظ').click();

      // Checks successful registeration
      cy.contains('تم إنشاء موقع مشروعك بنجاح !');
      cy.matchScreenshot("Successfull registeration")
    });
  });
});
