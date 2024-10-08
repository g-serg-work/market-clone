import { ReactNode } from 'react';
import cls from './FavoriteCategoryLoader.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import { FavoriteCategoryClose } from '../FavoriteCategoryClose/FavoriteCategoryClose';

export interface FavoriteCategoryLoaderProps {
    className?: string;
    children?: ReactNode;
    onClose?: () => void;
}

export const FavoriteCategoryLoader = (props: FavoriteCategoryLoaderProps) => {
    const { className, children, onClose } = props;

    return (
        <div
            className={classNames(cls.FavoriteCategoryLoader, {}, [className])}
            role="dialog"
            aria-modal="true"
            data-auto="content"
        >
            <div style={{ height: '250px', position: 'relative' }}>
                {children ?? (
                    <div className={cls.preloader} data-auto="preloader">
                        <div className={cls.wrapper}>
                            <div className={cls.transform}>
                                <div className={cls.progressWrapper}>
                                    <span
                                        data-auto="spinner"
                                        aria-label="Загрузка..."
                                        role="progressbar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <FavoriteCategoryClose onClose={onClose} />
        </div>
    );
};
