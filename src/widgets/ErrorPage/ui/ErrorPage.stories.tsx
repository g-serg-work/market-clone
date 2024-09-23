import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorPage } from './ErrorPage';

export default {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
    <div style={{ maxHeight: 300 }}>
        <ErrorPage {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};
