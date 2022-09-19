import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './link.scss';

const Link = React.memo(function ({ className, onClick, variant, href, children }) {

    return (
        <NavLink to={href} className={`link--${variant} ${className}`} onClick={onClick}>
            {children}
        </NavLink>
    );

});

Link.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['plain', 'underlineOnHover', 'button', 'underlined'])
};

Link.defaultProps = {
    className: '',
    onClick: null,
    variant: 'plain'
};

export { Link };
