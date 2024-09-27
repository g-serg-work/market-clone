import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderDesktopMenu } from './HeaderDesktopMenu';
import { RouterDecorator } from '@/shared/config/storybook';

export default {
    title: 'entities/HeaderDesktopMenu/HeaderDesktopMenu',
    component: HeaderDesktopMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof HeaderDesktopMenu>;

const Template: ComponentStory<typeof HeaderDesktopMenu> = (args) => (
    <HeaderDesktopMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
