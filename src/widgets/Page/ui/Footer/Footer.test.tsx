import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { Footer } from './Footer';

describe('footer', () => {
    test('component is render', () => {
        componentRender(<Footer />);
        expect(screen.getByTestId('Footer')).toBeInTheDocument();
    });
});
