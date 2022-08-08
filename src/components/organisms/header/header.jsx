import React from 'react';
import PropTypes from 'prop-types';

import { Announcement, CompanyLink, IconLink } from 'components/atoms';
import styles from './header.module.scss';

const Header = function ({ announcement }) {

    return (
        <header>

            {announcement && <Announcement text={announcement.text} url={announcement.url} />}

            <div className={`${styles['_']} wrapper`}>

                <IconLink className={styles['_search']} url="#" iconName="search" />

                <CompanyLink className={styles['_company']} />

                <IconLink className={styles['_cart']} url="/cart" iconName="shopping-bag" badge="0" />
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
