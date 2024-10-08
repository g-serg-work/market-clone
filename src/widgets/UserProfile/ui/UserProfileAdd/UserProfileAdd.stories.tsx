import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileAdd, { UserProfileAddProps } from './UserProfileAdd';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'widgets/UserProfile/UserProfileAdd',
    component: UserProfileAdd,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        RouterDecorator,
        StyledDecorator({ backgroundColor: '#f4f4f4' }),
    ],
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
