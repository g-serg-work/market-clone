import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserProfileLoader } from './UserProfileLoader';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'features/UserProfile/UserProfileLoader',
    component: UserProfileLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StyledDecorator({
            backgroundColor: '#f5f5f5',
            margin: 20,
        }),
    ],
} as ComponentMeta<typeof UserProfileLoader>;

const Template: ComponentStory<typeof UserProfileLoader> = (args) => (
    <UserProfileLoader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};