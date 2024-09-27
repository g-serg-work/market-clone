import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderNavigationMenuItem } from './HeaderNavigationMenuItem';

export default {
    title: 'shared/HeaderNavigationMenuItem',
    component: HeaderNavigationMenuItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderNavigationMenuItem>;

const Template: ComponentStory<typeof HeaderNavigationMenuItem> = (args) => <HeaderNavigationMenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
