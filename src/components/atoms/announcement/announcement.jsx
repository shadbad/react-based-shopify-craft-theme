import React from 'react';
import PropTypes from 'prop-types';
import styles from './announcement.module.scss';

const Announcement = React.memo(function ({ className, text, url }) {

    const innerElement = (url && url.length > 0) ?
        <a className={styles['_link']} href={url}>{text}</a>
        :
        <span className={styles['_message']}>{text}</span>;

    return (
        <div className={`${className} ${styles['_']}`}>
            <div className="wrapper">
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
