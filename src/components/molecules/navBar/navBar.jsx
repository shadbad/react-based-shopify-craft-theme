import React, { useCallback } from 'react';
import PropTypes, { string } from 'prop-types';
import { NavigationLink, SocialLink } from 'components/atoms';
import { useWindowResizeEffect, useDataProvider } from 'hooks';

import styles from './nav-bar.module.scss';

const NavBar = React.memo(function ({ links, menuIsExpanded }) {

    const eventHandlers = {

        subMenuTitleClick({ target }) {

            const container = target.closest('li[class*="menuItemWrapper"]');

            if (container.classList.contains(styles.expanded)) {

                container.classList.remove(styles.expanded);

            } else {

                container.classList.add(styles.expanded);

            }

        },

        windowResize() {

            const navBar = document.querySelector('#root > header div[class^="nav-bar"]');

            Array.from(navBar.querySelectorAll(`.${styles.expanded}`)).forEach((element) => element.classList.remove(styles.expanded));

            if (parseFloat(window.innerWidth) <= 1000) {

                const announcement = document.querySelector('#root > header div[class^="announcement"]');
                const drawer = document.querySelector('#root > header div[class^="header-drawer"]');

                const announcementHeight = announcement ? parseFloat(announcement.getBoundingClientRect().height) : 0;
                const drawerHeight = drawer ? parseFloat(drawer.getBoundingClientRect().height) : 0;

                navBar.style.top = `${announcementHeight + drawerHeight}px`;

            } else {

                navBar.removeAttribute('style');

            }

        }

    };

    const render = {
        link: useCallback((link) => (

            <li className={styles.menuItemWrapper} key={link.id}>
                <NavigationLink className={styles.menuItem} title={link.title} url={link.url} mod="main" />
            </li>

        ), []),

        submenu: useCallback((link) => (

            <li className={styles.menuItemWrapper} key={link.id}>

                <span
                    role="menuitem"
                    tabIndex={0}
                    className={styles.subMenuTitle}
                    onKeyPress={eventHandlers.subMenuTitleClick}
                    onClick={eventHandlers.subMenuTitleClick}
                >

                    {link.title}

                </span>

                <ul className={styles.subMenu}>
                    <li
                        role="menuitem"
                        className={styles.subMenuBack}
                        tabIndex={-1}
                        onKeyPress={eventHandlers.subMenuTitleClick}
                        onClick={eventHandlers.subMenuTitleClick}
                    >
                        {link.title}
                    </li>

                    {

                        link.subs.map(

                            (subItem) => (

                                <li className={styles.subMenuItemWrapper} key={subItem.id}>
                                    <NavigationLink title={subItem.title} url={subItem.url} mod="sub" className={styles.subMenuItem} />
                                </li>

                            )

                        )

                    }

                </ul>

            </li>
        ), [])
    };

    useWindowResizeEffect(eventHandlers.windowResize);

    const socialLinks = useDataProvider('SOCIAL_PLATFORMS');

    return (
        <div className={`${styles.root} ${menuIsExpanded ? styles.expandMenu : ''}`}>

            <nav className={styles.wrapper}>

                <ul className={styles.mainMenu}>
                    {
                        links.map((link) => {

                            if (!link.subs || link.subs.length === 0) return render.link(link);
                            return render.submenu(link);

                        })
                    }
                </ul>

            </nav>

            {
                socialLinks.status === 'done' &&
                (
                    <ul className={styles.social}>
                        {
                            socialLinks.data.map((item) => (
                                <li key={item.platform} className={styles.socialLinkWrapper}>
                                    <SocialLink platform={item.platform} url={item.url} />
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );

});

NavBar.propTypes = {

    menuIsExpanded: PropTypes.bool,

    links: PropTypes.arrayOf(PropTypes.shape({

        id: string.isRequired,

        title: string.isRequired,

        url: string,

        subs: PropTypes.arrayOf(PropTypes.shape({

            id: string.isRequired,

            title: string.isRequired,

            url: string.isRequired

        }))

    })).isRequired

};

NavBar.defaultProps = {
    menuIsExpanded: false
};

export { NavBar };
