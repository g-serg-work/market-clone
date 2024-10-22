# 🔧 Project Configure

For development, the project contains 2 config:

1. Webpack - [../config/build](../config/build)
2. vite - [vite.config.ts](../vite.config.ts)

Both collectors are adapted to the main features of the application.

The whole configuration is stored in [../config](../config)

```sh
config
|
+-- babel
|
+-- build
|   +-- loaders
|   +-- |  +-- buildBabelLoader.ts
|   +-- |  +-- buildCssLoader.ts
|   +-- types
|   +-- |  +-- config.ts
|   +-- buildDevServer.ts
|   +-- buildLoaders.ts
|   +-- buildPlugins.ts
|   +-- buildResolvers.ts
|   +-- buildWebpackConfig.ts
|
+-- jest
|   +-- jest.config.ts
|   +-- jestEmptyComponent.tsx
|   +-- setupTests.ts
|
+-- storybook
|   +-- main.ts
|   +-- preview.ts
```
