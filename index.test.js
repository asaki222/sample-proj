import { isValidRel, isValidAge, createNewItemOnTheList, displayErrorMessage, clearErrorMessages } from './helpers.js';


  
  describe('Form Validation', () => {
    it('should return true for valid age', () => {
      expect(isValidAge('25')).toBe(true);
    });
  
    it('should return false for invalid age', () => {
      expect(isValidAge('abc')).toBe(false);
    });
  
    it('should return true for valid relationship', () => {
      expect(isValidRel('self')).toBe(true);
    });
  
    it('should return false for invalid relationship', () => {
      expect(isValidRel(null)).toBe(false);
    });
  });
  
  describe('Adding Household Members', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="household-list"></div>
      `;
    });
  
    it('should add a new member to the household list', () => {
      const formData = {
        age: '25',
        rel: 'self'
      };
      createNewItemOnTheList(formData);
      const householdList = document.getElementById('household-list');
      expect(householdList.children.length).toBe(1);
    });
  });
  
  describe('Error Handling', () => {
    // Mocking the DOM for testing displayErrorMessage and clearErrorMessages
    beforeEach(() => {
      document.body.innerHTML = `
        <form id="test-form"></form>
      `;
    });
  
    it('should display error message', () => {
      const form = document.getElementById('test-form');
      displayErrorMessage('Test Error', form);
      const errorMessage = document.querySelector('.error-message');
      expect(errorMessage.textContent).toBe('Test Error');
    });
  
    it('should clear error messages', () => {
      const form = document.getElementById('test-form');
      displayErrorMessage('Test Error', form);
      clearErrorMessages();
      const errorMessage = document.querySelector('.error-message');
      expect(errorMessage).toBeNull();
    });
  });
  