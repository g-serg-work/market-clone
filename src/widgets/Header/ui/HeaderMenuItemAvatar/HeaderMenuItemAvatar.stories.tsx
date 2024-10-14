import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderMenuItemAvatar } from './HeaderMenuItemAvatar';

export default {
    title: 'widgets/Header/HeaderMenuItemAvatar',
    component: HeaderMenuItemAvatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderMenuItemAvatar>;

const Template: ComponentStory<typeof HeaderMenuItemAvatar> = (args) => (
    <HeaderMenuItemAvatar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithNotification = Template.bind({});
WithNotification.args = {
    hasNotification: true,
};
