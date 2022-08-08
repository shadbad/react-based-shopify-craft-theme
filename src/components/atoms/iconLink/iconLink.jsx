import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './iconLink.module.scss';

const IconLink = React.memo(function ({ className, url, iconName, handleClick, badge }) {

    const showBadge = badge !== '';

    const classNames = `${className} ${showBadge ? styles['_link--show-badge'] : styles['_link']} icon-${iconName}`;

    return (
        <Link to={url} className={classNames} onClick={handleClick}>
            {showBadge && <i className={styles['_badge']}>{badge}</i>}
        </Link>
    );

});

IconLink.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    badge: PropTypes.string
};

IconLink.defaultProps = {
    handleClick: null,
    className: '',
    badge: ''
};

export { IconLink };
