import { screen, render } from '@testing-library/react';
import { Landing } from './landing';

describe('Landing page', () => {
    it('renders Landing page', () => {
        render(<Landing />);
        expect(screen.getByRole('heading', { name: 'Landing page' })).toBeInTheDocument();
    });
});
