import { screen, render } from '@testing-library/react';
import App from './app';

describe('App', () => {
    it('renders hello', () => {
        render(<App />);
        expect(
            screen.getByRole('heading', { name: 'Hello' })
        ).toBeInTheDocument();
    });
});
