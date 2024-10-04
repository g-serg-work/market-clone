import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileBusiness, {
    UserProfileBusinessProps,
} from './UserProfileBusiness';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'features/UserProfile/UserProfileBusiness',
    component: UserProfileBusiness,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof UserProfileBusiness>;

const Template: ComponentStory<typeof UserProfileBusiness> = (args) => (
    <UserProfileBusiness {...args} />
);

const args: UserProfileBusinessProps = {
    route: '/business',
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithFocus = Template.bind({});
WithFocus.args = { ...args, autoFocus: true };
