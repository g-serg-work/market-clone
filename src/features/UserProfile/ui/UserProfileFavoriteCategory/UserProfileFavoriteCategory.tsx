import { memo } from 'react';
import cls from './UserProfileFavoriteCategory.module.scss';
import FavoriteCategorySvg from '@/shared/assets/icons/profile/favoritecategory.svg';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';
import { ClickAble } from '@/shared/ui/ClickAble';
import classNames from '@/shared/lib/classNames';
import { Mods } from '@/shared/lib/classNames/classNames';

export interface UserProfileFavoriteCategoryProps {
    className?: string;
    autoFocus?: boolean;
    hint: string;
    viewed?: boolean;
    onClick?: () => void;
}

const UserProfileFavoriteCategory = memo(
    (props: UserProfileFavoriteCategoryProps) => {
        const { className, autoFocus, hint, viewed, onClick } = props;

        const { autoFocusRef } = useAutoFocus<HTMLDivElement>();

        const mods: Mods = {
            [cls.notViewed]: !viewed,
        };

        return (
            <ClickAble
                className={classNames(cls.UserProfileFavoriteCategory, mods, [
                    className,
                ])}
                ref={autoFocus ? autoFocusRef : undefined}
                data-auto="favoriteCategoryMenuItem"
                tabIndex={0}
                role="menuitem"
                onClick={onClick}
            >
                <div className={cls.wrapper}>
                    <div>
                        <FavoriteCategorySvg
                            role="img"
                            aria-label=""
                            fill="none"
                        />
                    </div>
                    <div className={cls.textWrapper}>
                        <div className={cls.textBlock}>
                            <span
                                className={cls.textPrimary}
                                data-auto="text-primary"
                            >
                                <div>Любимая категория</div>
                                {!viewed && (
                                    <span className="ds-visuallyHidden">
                                        Не просмотрено
                                    </span>
                                )}
                            </span>
                            <span
                                className={cls.textSecondary}
                                data-auto="text-secondary"
                            >
                                {hint}
                            </span>
                        </div>
                    </div>
                </div>
            </ClickAble>
        );
    },
);

export default UserProfileFavoriteCategory;
