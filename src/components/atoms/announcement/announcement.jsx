import React from 'react';
import PropTypes from 'prop-types';
import styles from './announcement.module.scss';

const Announcement = React.memo(function ({ text, url }) {

    const innerElement = (url && url.length > 0) ?
        <a className={styles['_container__link']} href={url}>{text}</a>
        :
        <span className={styles['_container__message']}>{text}</span>;

    return (
        <div className={styles['_']}>
            <div className={styles['_container']}>
                {innerElement}
            </div>
        </div>
    );

});

Announcement.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string
};

Announcement.defaultProps = {
    url: null
};

export { Announcement };
