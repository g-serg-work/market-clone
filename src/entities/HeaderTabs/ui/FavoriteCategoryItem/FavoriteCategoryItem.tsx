import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './FavoriteCategoryItem.module.scss';
import { ClickAbleDiv } from '@/shared/ui/ClickAbleDiv';

interface FavoriteCategoryItemProps {
    className?: string;
    onClick?: () => void;
}

const title = 'Любимая категория';

export const FavoriteCategoryItem = memo((props: FavoriteCategoryItemProps) => {
    const { className, onClick } = props;

    return (
        <li role="tab">
            <ClickAbleDiv
                className={classNames(cls.FavoriteCategoryItem, {}, [
                    className,
                ])}
                tabIndex={0}
                role="button"
                onDivClick={onClick}
            >
                <span>{title}</span>
            </ClickAbleDiv>
        </li>
    );
});
