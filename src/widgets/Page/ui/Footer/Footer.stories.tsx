import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './Footer';

export default {
    title: 'widgets/Page/Footer',
    component: Footer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
