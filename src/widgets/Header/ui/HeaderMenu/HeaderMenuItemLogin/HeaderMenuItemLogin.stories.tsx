import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderMenuItemLogin } from './HeaderMenuItemLogin';

export default {
    title: 'widgets/Header/HeaderMenu/HeaderMenuItemLogin',
    component: HeaderMenuItemLogin,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderMenuItemLogin>;

const Template: ComponentStory<typeof HeaderMenuItemLogin> = (args) => (
    <HeaderMenuItemLogin {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithNotification = Template.bind({});
WithNotification.args = {
    hasNotification: true,
};
