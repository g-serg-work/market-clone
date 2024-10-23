import { memo, useCallback } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './CategoryMenuFavoriteCategoryItem.module.scss';
import { ClickAble } from '@/shared/ui/ClickAble';
import {
    modalChannel,
    modalChannelEvent,
} from '@/shared/eventsChannels/modalEventsChannel';

interface CategoryMenuFavoriteCategoryItemProps {
    className?: string;
    isLogged?: boolean;
}

const title = 'Любимая категория';

export const CategoryMenuFavoriteCategoryItem = memo(
    (props: CategoryMenuFavoriteCategoryItemProps) => {
        const { className, isLogged = false } = props;

        const onClick = useCallback(() => {
            const eventType = isLogged
                ? modalChannelEvent.showFavoriteCategoryModal
                : modalChannelEvent.showLoginModal;

            modalChannel.emit(eventType);
        }, [isLogged]);

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
