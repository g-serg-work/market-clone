import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';
import {
    RouterDecorator,
    StoreDecorator,
    StoryWrapper,
} from '@/shared/config/storybook';

export default {
    title: 'widgets/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), RouterDecorator],
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
    <StoryWrapper minHeight={300}>
        <Page {...args} />
    </StoryWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};