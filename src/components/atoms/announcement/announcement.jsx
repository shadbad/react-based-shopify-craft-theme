import React from 'react';
import PropTypes from 'prop-types';
import styles from './announcement.module.scss';

const Announcement = React.memo(function ({ text, url, className }) {

    const innerElement = (url && url.length > 0) ?
        <a className={styles.link} href={url}>{text}</a>
        :
        <span className={styles.message}>{text}</span>;

    return (
        <div className={`${styles.root} ${className}`}>
            <div className={styles.wrapper}>
                {innerElement}
            </div>
        </div>
    );

});

Announcement.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string,
    className: PropTypes.string
};

Announcement.defaultProps = {
    url: null,
    className: ''
};

export { Announcement };
