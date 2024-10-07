import { ComponentStory, ComponentMeta } from '@storybook/react';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import { CategoryMenu } from './CategoryMenu';

export default {
    title: 'widgets/CategoryMenu/CategoryMenu/CategoryMenu',
    component: CategoryMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof CategoryMenu>;

const Template: ComponentStory<typeof CategoryMenu> = (args) => (
    <CategoryMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
