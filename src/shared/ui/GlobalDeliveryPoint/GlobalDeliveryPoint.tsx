import { memo } from 'react';
import cls from './GlobalDeliveryPoint.module.scss';
import DeliveryPointSvg from '@/shared/assets/icons/delivery-point-20-20.svg';
import classNames from '@/shared/lib/classNames';

export interface GlobalDeliveryPointProps {
    className?: string;
    onSelectPoint?: () => void;
}

export const GlobalDeliveryPoint = memo((props: GlobalDeliveryPointProps) => {
    const { className, onSelectPoint } = props;
    return (
        <div className={classNames(cls.RegionSelect, {}, [className])}>
            <button
                type="button"
                className={classNames(cls.button, {}, ['cleanButton'])}
                onClick={onSelectPoint}
            >
                <div className={cls.button}>
                    <DeliveryPointSvg />
                    <div className={cls.title}>
                        <div>
                            <span>Дом</span>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
});
