import {
    BuyerTypeRouteTitles,
    BuyerTypeRoutes,
} from '@/shared/const/buyertype';
import {
    HeaderTabRoutes,
    HeaderTabRouteTitles,
} from '@/shared/const/headertabroutes';
import { BuyerTypesItem } from '../BuyerTypesItem/BuyerTypesItem';
import { FavoriteCategoryItem } from '../FavoriteCategoryItem/FavoriteCategoryItem';
import { HeaderTabsItem } from '../HeaderTabsItem/HeaderTabsItem';
import { HeaderTabsListProps } from './HeaderTabsList';

const items = Array.from(HeaderTabRouteTitles.keys());

interface useHeaderItemsProps {
    onFavoriteCategoryClick?: HeaderTabsListProps['onFavoriteCategoryClick'];
}

export const useHeaderItems = (props: useHeaderItemsProps) => {
    const { onFavoriteCategoryClick } = props;
    let _index = 0;

    // eslint-disable-next-line no-plusplus
    const next = () => _index++;

    const makeHeaderItem = (route: HeaderTabRoutes) => (
        <HeaderTabsItem key={next()} route={route} />
    );

    const HeaderTabsItems = items
        .slice(0, 2)
        .map(makeHeaderItem)
        .concat(
            <FavoriteCategoryItem
                key={next()}
                onClick={onFavoriteCategoryClick}
            />,
        )
        .concat(items.slice(2).map(makeHeaderItem));

    const BuyerTypesItems = Array.from(BuyerTypeRouteTitles.keys()).map(
        (route: BuyerTypeRoutes, index) => (
            <BuyerTypesItem key={index} route={route} />
        ),
    );

    return { HeaderTabsItems, BuyerTypesItems };
};
