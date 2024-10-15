import { ComponentMeta, ComponentStory } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import { LoginForm } from './LoginForm';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginForm: { userName: '123' },
    }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
    StoreDecorator({
        loginForm: { userName: '123', error: 'ERROR' },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];
