import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderSearchItem } from './HeaderSearchItem';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'shared/HeaderSearchItem',
    component: HeaderSearchItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StyledDecorator({ maxWidth: 800, padding: 20 })],
} as ComponentMeta<typeof HeaderSearchItem>;

const Template: ComponentStory<typeof HeaderSearchItem> = (args) => (
    <HeaderSearchItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithFocus = Template.bind({});
WithFocus.args = { autoFocus: true };

export const WithValue = Template.bind({});
WithValue.args = { value: 'test' };

export const WithValueAndFocus = Template.bind({});
WithValueAndFocus.args = { value: 'test', autoFocus: true };
