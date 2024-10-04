import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileAdd, { UserProfileAddProps } from './UserProfileAdd';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'features/UserProfile/UserProfileAdd',
    component: UserProfileAdd,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof UserProfileAdd>;

const Template: ComponentStory<typeof UserProfileAdd> = (args) => (
    <UserProfileAdd {...args} />
);

const args: UserProfileAddProps = {
    route: '/adduser',
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithFocus = Template.bind({});
WithFocus.args = { ...args, autoFocus: true };
