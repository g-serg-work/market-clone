import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';

export interface ErrorType {
    error: FetchBaseQueryError | SerializedError | undefined;
}

const isFetchBaseQueryErrorType = (error: any): error is FetchBaseQueryError =>
    'status' in error;

const ApiError = ({ error }: ErrorType) => {
    const msg = isFetchBaseQueryErrorType(error) ? error?.status : 'unknown';
    return <div>Error: {msg}</div>;
};

export default ApiError;
