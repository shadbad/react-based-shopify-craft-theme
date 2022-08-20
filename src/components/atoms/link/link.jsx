import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './link.scss';

const Link = React.memo(function ({ className, onClick, variant, url, children }) {

    return (
        <NavLink to={url} className={`link--${variant} ${className}`} onClick={onClick}>
            {children}
        </NavLink>
    );

});

Link.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['inline', 'block'])
};

Link.defaultProps = {
    className: '',
    onClick: null,
    variant: 'inline'
};

export { Link };
