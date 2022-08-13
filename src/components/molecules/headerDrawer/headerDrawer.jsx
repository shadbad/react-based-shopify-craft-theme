import React from 'react';
import PropTypes from 'prop-types';

import { IconLink } from 'components/atoms';

import styles from './header-drawer.module.scss';

const HeaderDrawer = React.memo(function ({ menuClickHandler, searchClickHandler, cartBadge }) {

    return (

        <div className={styles.container}>

            <IconLink className={styles.menu} url="#" iconName="menu" clickHandler={menuClickHandler} />

            <IconLink className={styles.company} url="/" iconName="logo" />

            <IconLink className={styles.search} url="#" iconName="search" clickHandler={searchClickHandler} />

            <IconLink className={styles.cart} url="/cart" iconName="cart" badge={cartBadge} />

        </div>

    );

});

HeaderDrawer.propTypes = {
    menuClickHandler: PropTypes.func.isRequired,
    searchClickHandler: PropTypes.func.isRequired,
    cartBadge: PropTypes.string.isRequired
};

export { HeaderDrawer };
