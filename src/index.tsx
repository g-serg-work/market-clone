import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@/app/styles/index.scss';
/* 
    disable to reduce bundle size
import './shared/config/i18n/i18n';
*/
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ForceUpdateProvider } from '@/shared/lib/render/forceUpdate';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import App from './app/App';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Target container is not a DOM element');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ForceUpdateProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ForceUpdateProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);

export { Theme } from '@/shared/const/theme';
