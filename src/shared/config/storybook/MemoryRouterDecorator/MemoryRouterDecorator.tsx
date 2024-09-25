import { Story } from '@storybook/react';
// eslint-disable-next-line feature-sliced-project/import-only-underlying
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export const MemoryRouterDecorator =
    (entry: string, path: string) => (StoryComponent: Story) =>
        (
            <MemoryRouter initialEntries={[entry]}>
                <Routes>
                    <Route
                        key={path}
                        path={path}
                        element={<StoryComponent />}
                    />
                </Routes>
            </MemoryRouter>
        );
