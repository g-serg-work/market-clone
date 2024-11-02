import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChefBankAlfa } from './ChefBankAlfa';

export default {
    title: 'shared/ChefBankAlfa',
    component: ChefBankAlfa,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ChefBankAlfa>;

const Template: ComponentStory<typeof ChefBankAlfa> = (args) => (
    <ChefBankAlfa {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
