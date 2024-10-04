import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Delimiter } from './Delimiter';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'shared/Delimiter',
    component: Delimiter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StyledDecorator({ backgroundColor: '#1f90ae' })],
} as ComponentMeta<typeof Delimiter>;

const Template: ComponentStory<typeof Delimiter> = (args) => (
    <Delimiter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    height: 20,
};
