import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileFavoriteCategory, {
    UserProfileFavoriteCategoryProps,
} from './UserProfileFavoriteCategory';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';
import { RouterDecorator } from '@/shared/config/storybook';

export default {
    title: 'features/UserProfile/UserProfileFavoriteCategory',
    component: UserProfileFavoriteCategory,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StyledDecorator({
            margin: 20,
        }),
        RouterDecorator,
    ],
} as ComponentMeta<typeof UserProfileFavoriteCategory>;

const Template: ComponentStory<typeof UserProfileFavoriteCategory> = (args) => (
    <UserProfileFavoriteCategory {...args} />
);

const args: UserProfileFavoriteCategoryProps = {
    hint: 'favorite hint',
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithSelected = Template.bind({});
WithSelected.args = { ...args, selected: true };
