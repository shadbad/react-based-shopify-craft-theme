import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './navigation-link.module.scss';

const NavigationLink = React.memo(function ({ className, url, title, mod }) {

    return (
        <NavLink className={`link${styles[`--${mod}`]} ${className}`} to={url}>{title}</NavLink>
    );

});

NavigationLink.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    mod: PropTypes.oneOf(['main-link', 'sub-link'])
};

NavigationLink.defaultProps = {
    className: '',
    mod: 'mainLink'
};

export { NavigationLink };