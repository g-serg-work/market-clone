import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderDesktop } from './HeaderDesktop';
import { RouterDecorator, StoreDecorator } from '@/shared/config/storybook';

export default {
    title: 'widgets/HeaderDesktop',
    component: HeaderDesktop,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), RouterDecorator],
} as ComponentMeta<typeof HeaderDesktop>;

const Template: ComponentStory<typeof HeaderDesktop> = (args) => (
    <HeaderDesktop {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
