import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ClarifyCategory } from './ClarifyCategory';

export default {
    title: 'shared/ClarifyCategory',
    component: ClarifyCategory,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ClarifyCategory>;

const Template: ComponentStory<typeof ClarifyCategory> = (args) => (
    <ClarifyCategory {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
