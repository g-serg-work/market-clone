import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileAdd, { UserProfileAddProps } from './UserProfileAdd';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';
import { RouterDecorator } from '@/shared/config/storybook';

export default {
    title: 'features/UserProfile/UserProfileAdd',
    component: UserProfileAdd,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StyledDecorator({
            margin: 20,
        }),
        RouterDecorator,
    ],
} as ComponentMeta<typeof UserProfileAdd>;

const Template: ComponentStory<typeof UserProfileAdd> = (args) => (
    <UserProfileAdd {...args} />
);

const args: UserProfileAddProps = {
    href: '/adduser',
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithFocus = Template.bind({});
WithFocus.args = { ...args, autoFocus: true };
