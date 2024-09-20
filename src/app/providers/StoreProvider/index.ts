import type {
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
    ThunkConfig,
} from './config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export { createReduxStore, StoreProvider };

export type {
    AppDispatch,
    ReduxStoreWithManager,
    StateSchema,
    StateSchemaKey,
    ThunkConfig,
};
