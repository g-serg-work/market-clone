import { memo } from 'react';
import cls from './CategoryMenuAddressItem.module.scss';
import Svg from '../../../assets/icons/delivery-point-20-20.svg';
import classNames from '@/shared/lib/helpers/classNames';
import { Button } from '@/shared/ui/Button';

export interface CategoryMenuAddressItemProps {
    className?: string;
    onSelectPoint?: () => void;
}

export const CategoryMenuAddressItem = memo(
    (props: CategoryMenuAddressItemProps) => {
        const { className, onSelectPoint } = props;
        return (
            <div
                className={classNames(cls.CategoryMenuAddressItem, {}, [
                    className,
                ])}
            >
                <div className={cls.wrapper}>
                    <div className={cls.content}>
                        <Button
                            className={classNames(cls.button, {}, [
                                'cleanButton',
                            ])}
                            onClick={onSelectPoint}
                        >
                            <div className={cls.button}>
                                <Svg />
                                <div className={cls.title}>
                                    <div>
                                        <span>Дом</span>
                                    </div>
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        );
    },
);
