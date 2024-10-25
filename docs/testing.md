# 🧪 Testing

#### The project uses 4 types of tests:

-   Unit tests with `jest` [jest.config.ts](..\config\jest\jest.config.ts)
    <br>
-   Integration tests components with `React testing library`
    <br>
-   Screenshot testing with `loki` [loki.js.org - visual regression tool ](https://loki.js.org)

Allows you to identify changes in the interface as a result of errors made

An example of an error in the code when a toolbar, if you have data from a user, instead of an avatar, displays a login button

![header-menu-user-data-error](images/header-menu-user-data-error.png 'header-menu-user-data-error')
