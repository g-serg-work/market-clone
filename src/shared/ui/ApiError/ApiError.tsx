import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';

export interface ErrorType {
    error: FetchBaseQueryError | SerializedError | undefined;
}

export const isFetchBaseQueryErrorType = (
    error: any,
): error is FetchBaseQueryError => 'status' in error;

export const ApiError = ({ error }: ErrorType) => {
    const status = isFetchBaseQueryErrorType(error) && error?.status;

    return <div>Error: {status ?? 'unknown'}</div>;
};
