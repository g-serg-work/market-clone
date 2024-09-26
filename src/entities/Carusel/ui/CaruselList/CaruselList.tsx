import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import { CaruselItem } from '../CaruselItem/CaruselItem';
import cls from './CaruselList.module.scss';
import { Product } from '@/entities/Product';

export interface CaruselListProps {
    className?: string;
    items: Product[];
}

export const CaruselList = memo((props: CaruselListProps) => {
    const { className, items } = props;

    const CaruselItems = items.map(({ id, ...item }) => (
        <CaruselItem key={id} {...item} />
    ));

    return (
        <div className={classNames(cls.CaruselList, {}, [className])}>
            <nav>
                <div className={cls.listWrapper}>
                    <ul className={cls.Carusel}>{CaruselItems}</ul>
                </div>
            </nav>
        </div>
    );
});
