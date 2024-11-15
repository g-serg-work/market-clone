import { useEffect } from 'react';
import { RecomRollSkeleton } from '../RecomRollSkeleton/RecomRollSkeleton';
import { useRecomRoll } from '../../api/recomRollApi';
import { ApiError } from '@/shared/ui/ApiError';
import { RecomRollRow, RecomRollTypes } from '@/entities/RecomRoll';

export interface RecomRollLoaderProps {
    type: RecomRollTypes;
    offset: number;
    onLoad?: (row: RecomRollRow) => void;
    isFirstLoad?: boolean;
}

export const RecomRollLoader = (props: RecomRollLoaderProps) => {
    const { type, offset, onLoad, isFirstLoad } = props;

    const {
        data: row,
        isLoading,
        isError,
        error,
    } = useRecomRoll({ type, offset });

    useEffect(() => {
        if (!isLoading && !isError && row) {
            onLoad?.(row);
        }
    }, [onLoad, type, row, isLoading, isError]);

    if (isLoading && !isFirstLoad) {
        return (
            <div>
                <RecomRollSkeleton />
            </div>
        );
    }

    if (isError) {
        return (
            <RecomRollSkeleton>
                <ApiError error={error} />
            </RecomRollSkeleton>
        );
    }

    return null;
};
