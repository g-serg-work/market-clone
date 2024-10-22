# ⚠️ Error Handling

### API Errors

Using ApiError to notify the user of errors

```javascript
const { data, isLoading, isError, error } = useOrdersPage();

if (isError) {
    return (
        <OrdersPageLoader>
            <ApiError error={error} />
        </OrdersPageLoader>
    );
}
```

```javascript
export const ApiError = ({ error }: ErrorType) => {
    const status = isFetchBaseQueryErrorType(error) && error?.status;

    return <div>Error: {status ?? 'unknown'}</div>;
};
```

### In App Errors

Utilize [Error Boundary](../src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx) error boundaries in React to handle errors within specific parts of your application. Instead of having only one error boundary for the entire app, consider placing multiple error boundaries in different areas. This way, if an error occurs, it can be contained and managed locally without disrupting the entire application's functionality, ensuring a smoother user experience.
