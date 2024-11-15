import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';

export type ApiErrorType = FetchBaseQueryError | SerializedError | undefined;

export interface ApiErrorProps {
    error: ApiErrorType;
}

export const isFetchBaseQueryErrorType = (
    error: any,
): error is FetchBaseQueryError => 'status' in error;

export const ApiError = ({ error }: ApiErrorProps) => {
    const status = isFetchBaseQueryErrorType(error) && error?.status;

    return <div>Error: {status ?? 'unknown'}</div>;
};
