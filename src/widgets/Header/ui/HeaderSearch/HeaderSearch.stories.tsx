import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderSearch } from './HeaderSearch';

export default {
    title: 'widgets/Header/HeaderSearch',
    component: HeaderSearch,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderSearch>;

const Template: ComponentStory<typeof HeaderSearch> = (args) => (
    <HeaderSearch {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithFocus = Template.bind({});
WithFocus.args = { autoFocus: true };

export const WithValue = Template.bind({});
WithValue.args = { value: 'test' };

export const WithValueAndFocus = Template.bind({});
WithValueAndFocus.args = { value: 'test', autoFocus: true };