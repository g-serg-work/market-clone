import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderTabsList } from './HeaderTabsList';

export default {
    title: 'entities/HeaderTabs/HeaderTabsList',
    component: HeaderTabsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderTabsList>;

const Template: ComponentStory<typeof HeaderTabsList> = (args) => (
    <HeaderTabsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
