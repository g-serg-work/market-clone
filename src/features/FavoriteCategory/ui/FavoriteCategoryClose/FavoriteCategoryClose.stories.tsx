import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FavoriteCategoryClose } from './FavoriteCategoryClose';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'features/FavoriteCategory/FavoriteCategoryClose',
    component: FavoriteCategoryClose,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StyledDecorator({
            maxWidth: 30,
            position: 'relative',
            margin: 'auto',
        }),
    ],
} as ComponentMeta<typeof FavoriteCategoryClose>;

const Template: ComponentStory<typeof FavoriteCategoryClose> = (args) => (
    <FavoriteCategoryClose {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
