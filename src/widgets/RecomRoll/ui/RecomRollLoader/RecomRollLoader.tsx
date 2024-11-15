import { useEffect } from 'react';
import { RecomRollSkeleton } from '../RecomRollSkeleton/RecomRollSkeleton';
import { useRecomRoll } from '../../api/recomRollApi';
import { RecomRollRow, RecomRollTypes } from '@/entities/RecomRoll';
import { ApiErrorType } from '@/shared/ui/ApiError';

export interface RecomRollLoaderProps {
    type: RecomRollTypes;
    offset: number;
    onLoad?: (row: RecomRollRow | undefined) => void;
    onError?: (error: ApiErrorType) => void;
    showSkeleton?: boolean;
}

export const RecomRollLoader = (props: RecomRollLoaderProps) => {
    const { type, offset, onLoad, onError, showSkeleton } = props;

    const {
        data: row,
        isLoading,
        isError,
        error,
    } = useRecomRoll({ type, offset });

    useEffect(() => {
        if (isError) {
            onError?.(error);
        } else if (!isLoading) {
            onLoad?.(row);
        }
    }, [error, isError, onLoad, onError, row, isLoading]);

    return isLoading && showSkeleton ? <RecomRollSkeleton /> : null;
};
