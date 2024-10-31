import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RecommendationTabs } from './RecommendationTabs';

export default {
    title: 'entries/RecommendationTabs',
    component: RecommendationTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RecommendationTabs>;

const Template: ComponentStory<typeof RecommendationTabs> = (args) => (
    <RecommendationTabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
