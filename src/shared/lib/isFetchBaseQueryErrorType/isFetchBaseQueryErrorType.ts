import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

export const isFetchBaseQueryErrorType = (
    error: any,
): error is FetchBaseQueryError => 'status' in error;
