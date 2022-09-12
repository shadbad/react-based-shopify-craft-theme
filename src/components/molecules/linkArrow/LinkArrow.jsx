import React from 'react';
import PropTypes from 'prop-types';
import { Link, Icon } from 'components/atoms';
import './link-arrow.scss';

const LinkArrow = React.memo(function ({ className, href, children, onClick }) {

    return (
        <Link href={href} className={`link-arrow ${className}`} onClick={onClick}>
            <span className="link-arrow__text">{children}</span>
            <Icon className="link-arrow__icon" name="arrow-right" />
        </Link>
    );

});

LinkArrow.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

LinkArrow.defaultProps = {
    className: '',
    onClick: null
};

export { LinkArrow };
