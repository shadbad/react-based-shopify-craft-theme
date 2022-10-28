import { screen, render } from '@testing-library/react';
import { Icon } from './icon';

describe('Icon', () => {
    it('Renders an SVG', () => {
        render(<Icon name="logo" />);
        expect(screen.getByTestId('icon-logo')).toBeInTheDocument();
    });
});
