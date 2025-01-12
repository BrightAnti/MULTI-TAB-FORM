**Multi-Tab Form with React Hook Form**

**Description**

This project is a React-based application featuring a multi-tab form. Each tab represents a separate form, but all forms save their data collectively when submitted. The form data is then saved into a downloadable JSON file. The application uses React Hook Form for form validation and management, ensuring efficient and scalable form handling. This project demonstrates the use of tab navigation, form validation, and dynamic form management in React.

**Features**

Multi-tab navigation to separate forms within a single page.


Form validation using React Hook Form.

Each tab contains an individual form with validation.

Collective form submission that saves data from all tabs into a JSON file.

Downloadable JSON file containing all form details.

Responsive design for optimal user experience.

**Technologies Used**

React: JavaScript library for building user interfaces.

React Hook Form: A library for managing and validating forms in React with minimal re-renders.

JavaScript: For handling the generation and download of the JSON file.

CSS: Custom styling to ensure responsive and visually appealing design.




**Usage**
Navigate through the tabs and fill out the forms.

Each tab validates its form using React Hook Form.

Upon clicking the Submit button, all form data is saved into a JSON file.

The file is automatically downloaded to your local system containing the details from all tabs in JSON format.


**Example Output**

After submitting the form, the downloaded file might look like this:

json


{

  "personal": {
  
    "field1": "value1",
    "field2": "value2"
  },
  
  "organisational": {
  
    "field1": "value1",
    "field2": "value2"
  },
  
  "tab3": {
  
    "field1": "value1",
    "field2": "value2"
  }
  
}


Contributions
Feel free to fork this repository and make improvements or fixes. If you have any suggestions, open an issue or a pull request.

License
This project is open-source and available under the MIT License.

