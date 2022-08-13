import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './icon-link.module.scss';

const IconLink = React.memo(function ({ className, url, iconName, clickHandler, badge }) {

    const showBadge = badge !== '';

    const classNames = `${showBadge ? styles['link--show-badge'] : styles['link']} icon-${iconName} ${className}`;

    return (
        <Link to={url} className={classNames} onClick={clickHandler}>
            {showBadge && <i className={styles['badge']}>{badge}</i>}
        </Link>
    );

});

IconLink.model = PropTypes.shape({
    url: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
    badge: PropTypes.string
});

IconLink.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
    badge: PropTypes.string
};

IconLink.defaultProps = {
    clickHandler: null,
    className: '',
    badge: ''
};

export { IconLink };
