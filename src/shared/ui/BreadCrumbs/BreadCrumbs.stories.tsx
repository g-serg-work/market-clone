import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BreadCrumbs } from './BreadCrumbs';

export default {
    title: 'shared/BreadCrumbs',
    component: BreadCrumbs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => (
    <BreadCrumbs {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
