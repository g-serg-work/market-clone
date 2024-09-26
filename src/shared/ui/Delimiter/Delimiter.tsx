import { memo } from 'react';
import classNames from '@/shared/lib/classNames';

interface DelimiterProps {
    className?: string;
    height: number;
}

export const Delimiter = memo((props: DelimiterProps) => {
    const { className, height } = props;
    return (
        <div style={{ height }} className={classNames('', {}, [className])} />
    );
});
