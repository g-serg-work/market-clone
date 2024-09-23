import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';
import { isFetchBaseQueryErrorType } from '@/shared/lib/isFetchBaseQueryErrorType';

export interface ErrorType {
    error: FetchBaseQueryError | SerializedError | undefined;
}

const ApiError = ({ error }: ErrorType) => {
    const msg = isFetchBaseQueryErrorType(error) ? error?.status : 'unknown';
    return <div>Error: {msg}</div>;
};

export default ApiError;
