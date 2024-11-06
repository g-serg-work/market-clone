import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChefBankMarker, ChefBankMarkerProps } from './ChefBankMarker';
import AlfaSvg from '@/shared/assets/icons/chef-bank/alfa.svg';

export default {
    title: 'shared/ChefBankMarker',
    component: ChefBankMarker,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ChefBankMarker>;

const Template: ComponentStory<typeof ChefBankMarker> = (args) => (
    <ChefBankMarker {...args} />
);

const args: ChefBankMarkerProps = {
    title: 'Альфа',
    svg: <AlfaSvg />,
    textClassName: 'ds-text_color_text-secondary',
};

export const Primary = Template.bind({});
Primary.args = args;
