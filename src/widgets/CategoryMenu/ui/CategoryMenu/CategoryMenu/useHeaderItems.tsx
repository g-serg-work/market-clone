import {
    BuyerTypeRouteTitles,
    BuyerTypeRoutes,
} from '@/shared/const/buyertype';
import {
    HeaderTabRoutes,
    HeaderTabRouteTitles,
} from '@/shared/const/headertabroutes';
import { CategoryMenuBuyerItem } from '../CategoryMenuBuyerItem/CategoryMenuBuyerItem';
import { CategoryMenuFavoriteCategoryItem } from '../CategoryMenuFavoriteCategoryItem/CategoryMenuFavoriteCategoryItem';
import { CategoryMenuItem } from '../../CategoryMenuItem/CategoryMenuItem';
import { CategoryMenuProps } from './CategoryMenu';

const items = Array.from(HeaderTabRouteTitles.keys());

interface useHeaderItemsProps {
    onFavoriteCategoryClick?: CategoryMenuProps['onFavoriteCategoryClick'];
}

export const useHeaderItems = (props: useHeaderItemsProps) => {
    const { onFavoriteCategoryClick } = props;
    let _index = 0;

    // eslint-disable-next-line no-plusplus
    const next = () => _index++;

    const makeHeaderItem = (route: HeaderTabRoutes) => (
        <CategoryMenuItem key={next()} route={route} />
    );

    const CategoryMenuItems = items
        .slice(0, 2)
        .map(makeHeaderItem)
        .concat(
            <CategoryMenuFavoriteCategoryItem
                key={next()}
                onClick={onFavoriteCategoryClick}
            />,
        )
        .concat(items.slice(2).map(makeHeaderItem));

    const CategoryMenuBuyerItems = Array.from(BuyerTypeRouteTitles.keys()).map(
        (route: BuyerTypeRoutes, index) => (
            <CategoryMenuBuyerItem key={index} route={route} />
        ),
    );

    return { CategoryMenuItems, CategoryMenuBuyerItems };
};
