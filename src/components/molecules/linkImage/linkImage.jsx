import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'components/atoms';
import './link-image.scss';

const LinkImage = React.memo(function ({ className, imageUrl, href, title }) {

    return (

        <Link className={`link-image ${className}`} to={href}>

            <span className="link-image__image" style={{ backgroundImage: `url(${imageUrl})` }} />

            <span className="link-image__title">

                <span className="link-image__title-text">{title}</span>

                <Icon name="arrow-right" className="link-image__title-icon" />

            </span>

        </Link>

    );

});

LinkImage.propTypes = {
    className: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

LinkImage.defaultProps = {
    className: ''
};

export { LinkImage };
