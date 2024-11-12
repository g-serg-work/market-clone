import { useEffect } from 'react';
import { RecomRollSkeleton } from '../RecomRollSkeleton/RecomRollSkeleton';
import { useRecomRoll } from '../../api/recomRollApi';
import { ApiError } from '@/shared/ui/ApiError';
import { RecomRollRow, RecomRollTypes } from '@/entities/RecomRoll';

export interface RecomRollLoaderProps {
    type: RecomRollTypes;
    offset: number;
    onLoad?: (rows: RecomRollRow[]) => void;
    isFirstLoad?: boolean;
}

export const RecomRollLoader = (props: RecomRollLoaderProps) => {
    const { type, offset, onLoad, isFirstLoad } = props;

    const {
        data: rows,
        isLoading,
        isError,
        error,
    } = useRecomRoll({ type, offset });

    useEffect(() => {
        if (!isLoading && !isError && rows) {
            onLoad?.(rows);
        }
    }, [onLoad, type, rows, isLoading, isError]);

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
