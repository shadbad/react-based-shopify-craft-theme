/* eslint-disable @typescript-eslint/no-empty-function */
import { screen, render } from '@testing-library/react';
import { ErrorBoundary } from './errorBoundary';

describe('ErrorBoundary', () => {
    it('Renders children when there is no error', () => {
        const sampleChild = <h1>No Error</h1>;

        render(<ErrorBoundary>{sampleChild}</ErrorBoundary>);

        expect(screen.getByRole('heading', { name: 'No Error' })).toBeInTheDocument();
    });

    it('Renders the error message', () => {
        const mockConsole = jest.spyOn(console, 'error').mockImplementation(() => {});

        const SampleChild = () => {
            throw new Error('The Error Message');
        };

        render(
            <ErrorBoundary>
                <SampleChild />
            </ErrorBoundary>
        );

        expect(
            screen.getByRole('heading', {
                name: 'Sorry.. there was an error',
                level: 1
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole('heading', {
                name: 'The Error Message',
                level: 2
            })
        ).toBeInTheDocument();

        mockConsole.mockRestore();
    });
});
