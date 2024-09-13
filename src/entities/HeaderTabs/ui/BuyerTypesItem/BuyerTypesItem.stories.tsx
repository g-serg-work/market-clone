import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BuyerTypesItem } from './BuyerTypesItem';
import { BuyerTypeRoutes } from '@/shared/const/buyertype';

export default {
    title: 'entities/HeaderTabs/BuyerTypesItem',
    component: BuyerTypesItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BuyerTypesItem>;

const Template: ComponentStory<typeof BuyerTypesItem> = (args) => (
    <BuyerTypesItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    route: BuyerTypeRoutes.DLYA_BIZNESA,
};
