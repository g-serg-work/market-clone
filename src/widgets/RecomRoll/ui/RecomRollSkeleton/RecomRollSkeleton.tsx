import { ReactNode } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './RecomRollSkeleton.module.scss';
import { SkeletonSvg } from '../../assets/icons/skeleton.svg';

export interface RecomRollSkeletonProps {
    className?: string;
    children?: ReactNode;
}

export const RecomRollSkeleton = (props: RecomRollSkeletonProps) => {
    const { className, children } = props;

    return (
        <div
            className={classNames(cls.RecomRollSkeleton, {}, [className])}
            data-apiary-widget-name="@marketfront/RemixLoader"
        >
            <div className={cls.wrapper}>
                {children ??
                    Array(6)
                        .fill(0)
                        .map((_, idx) => (
                            <div key={idx} className={cls.svgWrapper}>
                                <SkeletonSvg />
                            </div>
                        ))}
            </div>
        </div>
    );
};
