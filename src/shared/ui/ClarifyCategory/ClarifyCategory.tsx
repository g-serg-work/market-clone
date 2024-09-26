import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './ClarifyCategory.module.scss';

export interface ClarifyCategoryProps {
    className?: string;
}

export const ClarifyCategory = memo((props: ClarifyCategoryProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ClarifyCategory, {}, [className])}>
            <ul>
                <li>ClarifyCategory</li>
            </ul>
        </div>
    );
});
