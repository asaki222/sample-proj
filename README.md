# Household Builder

Household Builder is a simple web application for capturing information about a household applying for health insurance coverage. It allows users to input details about household members and submit the data for processing.

## Features

- Add household members with their age, relationship, and smoking status.
- Validate data entry for age and relationship fields.
- Display the list of household members.
- Remove individual household members from the list.
- Serialize household data upon submission.

## Technologies Used

- HTML
- CSS
- JavaScript (ES5)
- Jest for testing

## Usage

1. Clone the repository: `git clone https://github.com/asaki222/sample-proj.git`
2. Run `npm install` to install dependencies.
3. Start the HTTP server to serve the application:
   ```bash
   npx http-server

This will start the application on a local server. You can access it in your web browser.

4. Once opened:

    - Fill in the form fields for age, relationship, and smoking status.
    - Click the "Add" button to add a household member.
    - To remove a household member, click the "Delete" button next to their details.
    - When ready, click the "Submit" button to serialize the household data.

## Project Structure

    - index.html: HTML file containing the form and UI elements.
    - index.js: JavaScript file containing the logic for form validation, data handling, and UI manipulation.
    - index.test.js: Jest test file for testing the application logic.
    - Testing

## Testing

We use Jest for testing the application. To run the tests, execute the following command:
    ```bash
    npx test
