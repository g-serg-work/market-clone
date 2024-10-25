// eslint-disable-next-line react/no-typos
import 'react';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        fetchpriority?: 'high' | 'low' | 'auto';
    }

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        autoComplete?: string;
    }
}
