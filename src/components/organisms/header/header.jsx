import React from 'react';
import PropTypes from 'prop-types';

import { Announcement, IconLink } from 'components/atoms';
import styles from './header.module.scss';

const Header = function ({ announcement }) {

    return (
        <header>

            {announcement && <Announcement text={announcement.text} url={announcement.url} />}

            <div className={`${styles['_']}`}>

                <IconLink className={styles['_menu']} url="#" iconName="menu" />

                <IconLink className={styles['_company']} url="/" iconName="logo" />

                <IconLink className={styles['_search']} url="#" iconName="search" />

                <IconLink className={styles['_cart']} url="/cart" iconName="cart" badge="0" />

            </div>

        </header>
    );

};

Header.propTypes = {
    announcement: PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string
    })

};

Header.defaultProps = {
    announcement: null
};

export { Header };
