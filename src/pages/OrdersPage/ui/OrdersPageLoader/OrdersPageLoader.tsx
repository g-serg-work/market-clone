import { ReactElement } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './OrdersPageLoader.module.scss';

export interface OrdersPageLoaderProps {
    className?: string;
    children?: ReactElement;
}

export const OrdersPageLoader = (props: OrdersPageLoaderProps) => {
    const { className, children } = props;

    return (
        <div className={classNames(cls.OrdersPageLoader, {}, [className])}>
            <div className={cls.wrapper}>
                {children ?? (
                    <>
                        <div className={cls.itemWrapper}>
                            <div className={cls.item1}>
                                <span className="ds-visuallyHidden">Загрузка</span>
                            </div>
                        </div>
                        <div className={cls.itemWrapper}>
                            <div className={cls.item2}>
                                <span className="ds-visuallyHidden">Загрузка</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
