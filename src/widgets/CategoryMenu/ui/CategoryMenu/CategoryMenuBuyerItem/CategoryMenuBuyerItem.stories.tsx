import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoryMenuBuyerItem } from './CategoryMenuBuyerItem';
import { BuyerTypeRoutes } from '@/shared/const/buyertype';

export default {
    title: 'widgets/CategoryMenu/CategoryMenu/CategoryMenuBuyerItem',
    component: CategoryMenuBuyerItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CategoryMenuBuyerItem>;

const Template: ComponentStory<typeof CategoryMenuBuyerItem> = (args) => (
    <CategoryMenuBuyerItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    route: BuyerTypeRoutes.DLYA_BIZNESA,
};
