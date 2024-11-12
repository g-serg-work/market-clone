import React, { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './RecomRollLayout.module.scss';

export interface RecomRollLayoutProps {
    className?: string;
    children: React.ReactNode;
}

export const RecomRollLayout = memo((props: RecomRollLayoutProps) => {
    const { className, children } = props;

    return (
        <div
            data-apiary-widget-name="@card/RecommendationRolls"
            className={classNames(cls.RecomRollLayout, {}, [className])}
        >
            <div className={cls.wrapper}>
                <div data-apiary-widget-name="@card/RecommendationRollV2">
                    <div className={cls.rollWrapper}>
                        <div className={cls.roll}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
});
