import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    RecommendationTabs,
    RecommendationTabsProps,
} from './RecommendationTabs';

export default {
    title: 'entities/RecommendationTabs',
    component: RecommendationTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RecommendationTabs>;

const Template: ComponentStory<typeof RecommendationTabs> = (args) => (
    <RecommendationTabs {...args} />
);

const args: RecommendationTabsProps = {};

export const Normal = Template.bind({});
Normal.args = args;

export const TabSale = Template.bind({});
TabSale.args = { ...args, isSale: true };
