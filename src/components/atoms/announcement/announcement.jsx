import React from 'react';
import PropTypes from 'prop-types';
import styles from './announcement.module.scss';

const Announcement = React.memo(function ({ text, url }) {

    const innerElement = (url && url.length > 0) ?
        <a className={styles.link} href={url}>{text}</a>
        :
        <span className={styles.message}>{text}</span>;

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {innerElement}
            </div>
        </div>
    );

});

Announcement.schema = PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string
});

Announcement.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string
};

Announcement.defaultProps = {
    url: null
};

export { Announcement };
