import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderNavigation } from './HeaderNavigation';

export default {
    title: 'widgets/Header/HeaderNavigation',
    component: HeaderNavigation,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderNavigation>;

const Template: ComponentStory<typeof HeaderNavigation> = (args) => (
    <HeaderNavigation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
