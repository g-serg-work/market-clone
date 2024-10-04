import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CaruselItem } from './CaruselItem';
import { RouterDecorator } from '@/shared/config/storybook';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'entities/Carusel/CaruselItem',
    component: CaruselItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, StyledDecorator({ maxWidth: 500 })],
} as ComponentMeta<typeof CaruselItem>;

const Template: ComponentStory<typeof CaruselItem> = (args) => (
    <CaruselItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'carusel-item',
    img: '',
    imgTest: '/tests/assets/carusel-item.webp',
    href: 'about:blank',
};
