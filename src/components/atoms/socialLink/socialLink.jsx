import React from 'react';
import PropTypes from 'prop-types';

import styles from './social-link.module.scss';

const SocialLink = React.memo(function ({ platform, url }) {

    return (
        <a className={`${styles.root} icon-${platform}`} href={url} rel="noreferrer" target="_blank">
            <span>{platform}</span>
        </a>
    );

});

SocialLink.propTypes = {
    platform: PropTypes.oneOf(['linkedin', 'github', 'twitter']).isRequired,
    url: PropTypes.string.isRequired
};

export { SocialLink };
