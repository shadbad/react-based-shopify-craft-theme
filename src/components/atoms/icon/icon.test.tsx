import { screen, render } from '@testing-library/react';
import { Icon } from './icon';

describe('Icon', () => {
    it('Renders an SVG', () => {
        render(<Icon name="arrow-left" />);
        expect(screen.getByTestId('icon-arrow-left')).toBeInTheDocument();
    });
});
