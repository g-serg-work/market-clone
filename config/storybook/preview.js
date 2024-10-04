import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook';
import { ThemeDecorator } from '../../src/shared/config/storybook';
import { SuspenseDecorator } from '../../src/shared/config/storybook';
import StyledDecorator from '../../src/shared/config/storybook/StyledDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(SuspenseDecorator);
addDecorator(
    StyledDecorator({
        margin: 20,
    }),
);
