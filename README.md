![Screenshot (831)](https://github.com/mo7amedgisimelsied/Quizzati/assets/146651073/a92be8b6-043f-4021-84d6-dc3e24386c56)

# Quizzati

**Quizzati** is a React-based website designed to assist students of IU with practice questions derived from their coursebooks. The primary goal of this project is to help students prepare for their exams by providing much-needed resources, especially in areas where resources are limited.

## Project Requirements and Dependencies

This project currently focuses on the frontend and utilizes mock data from JavaScript files located in the `src/Components/mockEndpoints` folder to simulate data that would typically be fetched from a database.

### Database and Backend Integration

The backend for this project, including the database schema (MySQL) and Spring Boot files, is available in a separate repository. You can find it here: [Backend Repository](https://github.com/mo7amedgisimelsied/Quizzati-Backend).

To integrate the frontend with the backend:

1. Remove the mock data files.
2. Uncomment and configure the fetching methods already present in the code.
3. Update the URLs and configure `application.properties` in the Java files accordingly.

## Usage and Features

- **Program Selection**: Users can select their program and the specific course they are interested in.
- **Quiz Functionality**:
  - Start the quiz and navigate between questions using a navigation bar.
  - Check and edit answers before moving to the next question to ensure learning and understanding.

## Live Preview

You can access the live preview of the Quizzati website [here](https://mo7amedgisimelsied.github.io/Quizzati/#/).

## Contributing Guidelines

Contributions to Quizzati are highly appreciated to further enhance its utility for students. You can contribute by:

- Updating the database and adding more courses.
- Improving the website’s functionality and user experience.
- Adding new features.
- Assisting with hosting the backend.

For any contributions, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

Together, we can make Quizzati an invaluable tool for students at IU!
