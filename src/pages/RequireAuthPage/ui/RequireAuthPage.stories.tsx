import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RequireAuthPage } from './RequireAuthPage';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'pages/RequireAuthPage',
    component: RequireAuthPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), RouterDecorator],
} as ComponentMeta<typeof RequireAuthPage>;

const Template: ComponentStory<typeof RequireAuthPage> = (args) => (
    <RequireAuthPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
