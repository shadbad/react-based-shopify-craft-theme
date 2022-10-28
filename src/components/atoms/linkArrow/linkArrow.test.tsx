import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LinkArrow } from './linkArrow';

describe('LinkArrow', () => {
    it('Renders an arrow icon inside the link', () => {
        render(<LinkArrow href="/sample-page" text="Sample link" />, { wrapper: BrowserRouter });
        const link = screen.getByRole('link', { name: 'Sample link' });
        const icon = within(link).getByTestId('icon-arrow-right');
        expect(icon).toBeInTheDocument();
    });
});
