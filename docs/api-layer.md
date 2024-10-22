# 📡 API Layer

### Interaction with data

Requests to the server are sent using

1. [RTK query](/src/shared/api/rtkApi.ts)

```
export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
```

2. [axios](/src/shared/api/api.ts)

```
export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization =
            localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
});
```

### Asynchronous connection of reducers

For an asynchronous connection of reducers, it is used [DynamicModuleLoader](../src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)
