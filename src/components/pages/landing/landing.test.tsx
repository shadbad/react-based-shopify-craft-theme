import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Landing } from './landing';

describe('Landing page', () => {
    it('renders Landing page', () => {
        render(<Landing />, { wrapper: BrowserRouter });
        expect(screen.getByRole('heading', { name: 'Landing page' })).toBeInTheDocument();
    });
});
