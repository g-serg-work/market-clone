import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RequireAuthPage } from './RequireAuthPage';

export default {
    title: 'pages/RequireAuthPage',
    component: RequireAuthPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RequireAuthPage>;

const Template: ComponentStory<typeof RequireAuthPage> = (args) => (
    <RequireAuthPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
