import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderTabsList } from './HeaderTabsList';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'entities/HeaderTabs/HeaderTabsList',
    component: HeaderTabsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof HeaderTabsList>;

const Template: ComponentStory<typeof HeaderTabsList> = (args) => (
    <HeaderTabsList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
