import { rtkApi } from '@/shared/api/rtkApi';
import { RecomRollRow, RecomRollTypes } from '@/entities/RecomRoll';

export interface RecomRollArg {
    type: RecomRollTypes;
    offset: number;
}

const recomRollApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecomRoll: build.query<RecomRollRow[], RecomRollArg>({
            query: ({ type, offset }) => ({
                url: '/recom-roll',
                params: {
                    type,
                    offset: offset.toString(),
                },
            }),
        }),
    }),
});

export const useRecomRoll = recomRollApi.useGetRecomRollQuery;
