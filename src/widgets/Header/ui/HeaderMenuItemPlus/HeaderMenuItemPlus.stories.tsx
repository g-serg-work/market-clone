import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderMenuItemPlus } from './HeaderMenuItemPlus';

export default {
    title: 'widgets/Header/HeaderMenuItemPlus',
    component: HeaderMenuItemPlus,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderMenuItemPlus>;

const Template: ComponentStory<typeof HeaderMenuItemPlus> = (args) => (
    <HeaderMenuItemPlus {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
