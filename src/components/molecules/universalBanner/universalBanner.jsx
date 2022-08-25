import React from 'react';
import PropTypes from 'prop-types';
import { LinkArrow } from 'components/molecules';
import './universal-banner.scss';

const UniversalBanner = React.memo(function ({ className, text, href }) {

    return (
        <div className={`universal-banner ${className}`}>
            <div className="universal-banner__wrapper">
                <LinkArrow className="universal-banner__link" href={href}>
                    {text}
                </LinkArrow>
            </div>
        </div>
    );

});

UniversalBanner.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    href: PropTypes.string
};

UniversalBanner.defaultProps = {
    className: '',
    href: ''
};

export { UniversalBanner };
