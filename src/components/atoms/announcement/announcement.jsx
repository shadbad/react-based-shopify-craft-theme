import React from 'react';
import PropTypes from 'prop-types';
import styles from './announcement.module.scss';

const Announcement = React.memo(({ text, url }) => {

    const innerElement = (url && url.length > 0) ? <a href={url}>{text}</a> : <span>{text}</span>;

    return (
        <div className={styles.announcement}>
            <div className="wrapper">
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
