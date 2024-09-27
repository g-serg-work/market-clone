import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PlusHeaderDesktopItem } from './PlusHeaderDesktopItem';

export default {
    title: 'shared/PlusHeaderDesktopItem',
    component: PlusHeaderDesktopItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PlusHeaderDesktopItem>;

const Template: ComponentStory<typeof PlusHeaderDesktopItem> = (args) => <PlusHeaderDesktopItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
