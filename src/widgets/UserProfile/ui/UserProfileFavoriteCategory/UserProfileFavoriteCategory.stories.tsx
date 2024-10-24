import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileFavoriteCategory, {
    UserProfileFavoriteCategoryProps,
} from './UserProfileFavoriteCategory';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/UserProfile/UserProfileFavoriteCategory',
    component: UserProfileFavoriteCategory,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
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
