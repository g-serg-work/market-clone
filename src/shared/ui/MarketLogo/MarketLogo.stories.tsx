import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MarketLogo, MarketLogoProps } from './MarketLogo';

const props: MarketLogoProps = {};

export default {
    title: 'shared/MarketLogo',
    component: MarketLogo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MarketLogo>;

const Template: ComponentStory<typeof MarketLogo> = (args) => (
    <MarketLogo {...args} />
);

export const Primary = Template.bind({});
Primary.args = props;
