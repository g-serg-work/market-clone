# 🌐 Deployment

## CI pipeline and pre-commit hooks

`Github action` configuration is located in [.github/workflows](../.github/workflows). The CI drives away all types of tests, assembly of the project and storybook, linting.

In pre-commit hooks we check the project with linters, config in [.husky](../.husky)

## Deploy and serve

Deploy and serve application on `Vercel` [Production](https://github.com/g-serg-work/market-clone/deployments/Production)
