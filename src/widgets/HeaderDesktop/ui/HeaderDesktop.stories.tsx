import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderDesktop } from './HeaderDesktop';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

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
