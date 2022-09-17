import React from 'react';
import PropTypes from 'prop-types';
import { TextHeading, Link } from 'components/atoms';
import './banner.scss';

const Banner = React.memo(function ({ className, image, title, body, linkText, href }) {

    return (
        <div className={`banner ${className}`}>

            <span className="banner__image" style={{ backgroundImage: `url(${image})` }} />

            <div className="banner__content">

                <TextHeading className="banner__title" type={4}>{title}</TextHeading>

                <p className="banner__body">{body}</p>

                <Link className="banner__link" variant="button" href={href}>{linkText}</Link>

            </div>

        </div>
    );

});

Banner.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    href: PropTypes.string,
    image: PropTypes.string.isRequired
};

Banner.defaultProps = {
    className: '',
    linkText: '',
    href: ''
};

export { Banner };
