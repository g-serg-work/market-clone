import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderLogo } from './HeaderLogo';

export default {
    title: 'widgets/Header/HeaderLogo',
    component: HeaderLogo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderLogo>;

const Template: ComponentStory<typeof HeaderLogo> = (args) => (
    <HeaderLogo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
