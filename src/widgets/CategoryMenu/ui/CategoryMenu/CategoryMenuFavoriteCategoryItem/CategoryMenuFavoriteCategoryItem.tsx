import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './CategoryMenuFavoriteCategoryItem.module.scss';
import { ClickAble } from '@/shared/ui/ClickAble';
import {
    AppEventChannel,
    AppEventTypes,
} from '@/shared/eventChannels/appEvents';

interface CategoryMenuFavoriteCategoryItemProps {
    className?: string;
}

const title = 'Любимая категория';

export const CategoryMenuFavoriteCategoryItem = memo(
    (props: CategoryMenuFavoriteCategoryItemProps) => {
        const { className } = props;

        const onClick = () => {
            AppEventChannel.emit(
                AppEventTypes.onCategoryMenuFavoriteCategoryItemClick,
            );
        };

        return (
            <li role="tab">
                <ClickAble
                    className={classNames(
                        cls.CategoryMenuFavoriteCategoryItem,
                        {},
                        [className],
                    )}
                    tabIndex={0}
                    role="button"
                    onClick={onClick}
                >
                    <span>{title}</span>
                </ClickAble>
            </li>
        );
    },
);
