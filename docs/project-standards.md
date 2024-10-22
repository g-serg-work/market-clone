# ⚙️ Project Standards

Enforcing project standards is crucial for maintaining code quality, consistency, and scalability in a React application. By establishing and adhering to a set of best practices, developers can ensure that the codebase remains clean, organized, and easy to maintain.

#### ESLint

ESLint serves as a valuable linting tool for JavaScript, helping developers in maintaining code quality and adhering to coding standards. By configuring rules in the [.eslintrc.js](../.eslintrc.js) file, ESLint helps identify and prevent common errors, ensuring code correctness and promoting consistency throughout the codebase. This approach not only helps in catching mistakes early but also enforces uniformity in coding practices, thereby enhancing the overall quality and readability of the code.

#### Prettier

Prettier is a useful tool for maintaining consistent code formatting in your project. By enabling the "format on save" feature in your IDE, code is automatically formatted according to the rules set in the [.prettierrc.json](../.prettierrc.json) configuration file. This practice ensures a uniform code style across your codebase and provides helpful feedback on code issues. If the auto-formatting fails, it signals potential syntax error. Furthermore, Prettier can be integrated with ESLint to handle code formatting tasks alongside enforcing coding standards effectively throughout the development process.

#### TypeScript

ESLint is effective for detecting language-related bugs in JavaScript. However, due to JavaScript's dynamic nature, ESLint may not catch all runtime data issues, especially in complex projects. To address this, TypeScript is recommended. TypeScript is valuable for identifying issues during large refactoring processes that may go unnoticed. When refactoring, prioritize updating type declarations first, then resolving TypeScript errors throughout the project. It's important to note that while TypeScript enhances development confidence by performing type checking at build time, it does not prevent runtime failures. Configuring here [tsconfig.json](../tsconfig.json).

#### Absolute imports

Absolute imports should always be configured and used because it makes it easier to move files around and avoid messy import paths such as `../../../component`. Wherever you move the file, all the imports will remain intact. Here is how to configure it:

`tsconfig.json`

```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

## Linting

The project is written in accordance with the methodology [Feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

The project uses eslint to check typescript code and stylelint to check style files.

Also for strict control of the main architectural principles uses its own eslint plugin `eslint-plugin-feature-sliced-project`, which contains 3 rules

1. `import-only-underlying` - checks the correctness of the use of layers in terms of fsd (for example, widgets cannot be used in features and entitites)

![import-only-underlying](images/import-only-underlying.png 'import-only-underlying')

2. `public-api-import` - allows imports from other modules only from the public api

![public-api-import](images/public-api-import.png 'public-api-import')

3. `relative-import-check` - prohibits the use of absolute imports within the framework of one module

![relative-import-check](images/relative-import-check.png 'relative-import-check')
