# 🧱 Components And Styling

## Styling Solutions

There are multiple ways to style a react application. Some good options are:

-   [CSS modules](https://github.com/css-modules/css-modules)

[CSS modules Example Code - HeaderLogo.module.scss](../src/widgets/Header/ui/HeaderLogo/HeaderLogo.module.scss)

## Storybook

[📋 Storybook (market-clone)](https://g-serg-work.github.io/market-clone)

[Storybook](https://storybook.js.org/) is a great tool for developing and testing components in isolation. Think of it as a catalogue of all the components your application is using. Very useful for developing and detectability of components.

The project for each component describes the celebrations. Requests to the server are mocked using `storybook-addon-mock`.

The story file creates next to the component with the extension `*.stories.tsx`.

[Storybook Story Example Code - HeaderLogo.stories.tsx](../src/widgets/Header/ui/HeaderLogo/HeaderLogo.stories.tsx)
