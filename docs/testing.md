# 🧪 Testing

#### The project uses 4 types of tests:

-   Unit tests with `jest` [jest.config.ts](..\config\jest\jest.config.ts)
    <br>
-   Integration tests components with `React testing library`
    <br>
-   Screenshot testing with `loki`

[Loki.js](https://loki.js.org) is a tool for automating the use of stories in Storybook as screenshot tests.

He takes a screenshot of each story using Puppeteer, and then compares the resulting screenshots pixel-by-pixel with the reference ones.

Allows you to identify changes in the interface as a result of errors made

An example of an error in the code when a toolbar, if you have data from a user, instead of an avatar, displays a login button

![header-menu-user-data-error](images/header-menu-user-data-error.png 'header-menu-user-data-error')

-   E2E testing with `Cypress` [../cypress](..\cypress)

End-to-End Testing is a method that evaluates an application as a whole. These tests involve automating the complete application, including both the frontend and backend, to confirm that the entire system functions correctly. End-to-End tests simulate how a user would interact with the application.

[Cypress](https://cypress.io) is a tool for running e2e tests in an automated way.
