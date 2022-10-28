import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './link.scss';

const Link = React.memo(
    (function () {
        const jumpToTop = () => window.scrollTo({ top: 0 });

        function LinkComponent({ className, href, variant, content }: propTypes) {
            if (href.startsWith('http'))
                return (
                    <a className={`link link--${variant} ${className}`} href={href} target="_blank" rel="noreferrer">
                        {content}
                    </a>
                );

            return (
                <RouterLink className={`link link--${variant} ${className}`} to={href} onClick={jumpToTop}>
                    {content}
                </RouterLink>
            );
        }

        LinkComponent.defaultProps = {
            className: '',
            variant: 'regular'
        };

        return LinkComponent;
    })()
);

type propTypes = {
    className?: string;
    content: React.ReactNode;
    href: string;
    variant?: 'underlined' | 'underline-on-hover' | 'regular';
};

export { Link };
