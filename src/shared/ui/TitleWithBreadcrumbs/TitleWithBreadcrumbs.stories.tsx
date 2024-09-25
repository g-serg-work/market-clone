import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TitleWithBreadcrumbs } from './TitleWithBreadcrumbs';

export default {
    title: 'shared/TitleWithBreadcrumbs',
    component: TitleWithBreadcrumbs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof TitleWithBreadcrumbs>;

const Template: ComponentStory<typeof TitleWithBreadcrumbs> = (args) => (
    <TitleWithBreadcrumbs {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
