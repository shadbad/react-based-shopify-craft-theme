import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from './link';

describe('Link', () => {
    const sampleText = 'Sample Link';
    const sampleInternalHref = '/to-sample-link';
    const sampleExternalHref = 'https://abc.com/';
    const sampleContent = <span>{sampleText}</span>;

    const renderLink = (type: 'int' | 'ext') => {
        switch (type) {
            case 'int':
                return render(<Link content={sampleContent} href={sampleInternalHref} />, { wrapper: BrowserRouter });
            default:
                return render(<Link content={sampleContent} href={sampleExternalHref} />, { wrapper: BrowserRouter });
        }
    };

    const getLink = () => screen.getByRole('link', { name: sampleText });

    it('Renders a link with the given text and href', () => {
        renderLink('int');
        expect(getLink()).toBeInTheDocument();
    });

    it('Sets the target of the external links to a blank page', () => {
        renderLink('ext');
        expect(getLink()).toHaveAttribute('target', '_blank');
    });
});
