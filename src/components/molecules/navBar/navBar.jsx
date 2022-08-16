import React from 'react';
import PropTypes from 'prop-types';
import { NavigationLink, SocialLink } from 'components/atoms';
import { useWindowResizeEffect } from 'hooks';

import styles from './nav-bar.module.scss';

const NavBar = React.memo(function ({ links, socialLinks, menuIsExpanded, topPosition, className }) {

    useWindowResizeEffect(NavBar.eventHandlers.windowResize);

    return (
        <div className={`${styles.root} ${menuIsExpanded ? styles.expandMenu : ''} ${className}`} style={{ top: `${topPosition}px` }}>

            <nav className={styles.wrapper}>

                <ul className={styles.mainMenu}>
                    {
                        links.map((link) => {

                            if (!link.subs || link.subs.length === 0) {

                                return <NavBar.Link key={link.id} id={link.id} title={link.title} url={link.url} />;

                            }

                            return <NavBar.RenderSubmenu key={link.id} id={link.id} title={link.title} subs={link.subs} />;

                        })
                    }
                </ul>

            </nav>

            <ul className={styles.social}>
                {
                    socialLinks.map((item) => (
                        <li key={item.platform} className={styles.socialLinkWrapper}>
                            <SocialLink platform={item.platform} url={item.url} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );

});

NavBar.propTypes = {

    menuIsExpanded: PropTypes.bool,

    links: PropTypes.arrayOf(PropTypes.shape({

        id: PropTypes.string.isRequired,

        title: PropTypes.string.isRequired,

        url: PropTypes.string,

        subs: PropTypes.arrayOf(PropTypes.shape({

            id: PropTypes.string.isRequired,

            title: PropTypes.string.isRequired,

            url: PropTypes.string.isRequired

        }))

    })).isRequired,

    socialLinks: PropTypes.arrayOf(PropTypes.shape({
        platform: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })).isRequired,

    topPosition: PropTypes.number,

    className: PropTypes.string

};

NavBar.defaultProps = {
    menuIsExpanded: false,
    topPosition: 0,
    className: ''
};

NavBar.eventHandlers = {

    subMenuTitleClick({ target }) {

        const container = target.closest(`li.${styles.menuItemWrapper}`);

        if (container.classList.contains(styles.expanded)) {

            container.classList.remove(styles.expanded);

        } else {

            container.classList.add(styles.expanded);

        }

    },

    windowResize() {

        const navBar = document.querySelector(`header > .${styles.root}`);

        Array.from(navBar.querySelectorAll(`.${styles.expanded}`)).forEach((element) => element.classList.remove(styles.expanded));

    }

};

// #region sub components

NavBar.Link = React.memo(function ({ id, title, url }) {

    return (

        <li className={styles.menuItemWrapper} key={id}>
            <NavigationLink className={styles.menuItem} title={title} url={url} mod="main" />
        </li>

    );

});

NavBar.Link.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

NavBar.RenderSubmenu = React.memo(function ({ id, title, subs }) {

    return (

        <li className={styles.menuItemWrapper} key={id}>

            <span
                role="menuitem"
                tabIndex={0}
                className={styles.subMenuTitle}
                onKeyPress={NavBar.eventHandlers.subMenuTitleClick}
                onClick={NavBar.eventHandlers.subMenuTitleClick}
            >

                {title}

            </span>

            <ul className={styles.subMenu}>
                <li
                    role="menuitem"
                    className={styles.subMenuBack}
                    tabIndex={-1}
                    onKeyPress={NavBar.eventHandlers.subMenuTitleClick}
                    onClick={NavBar.eventHandlers.subMenuTitleClick}
                >

                    {title}

                </li>

                {

                    subs.map(

                        (subItem) => (

                            <li className={styles.subMenuItemWrapper} key={subItem.id}>
                                <NavigationLink title={subItem.title} url={subItem.url} mod="sub" className={styles.subMenuItem} />
                            </li>

                        )

                    )

                }

            </ul>

        </li>
    );

});

NavBar.RenderSubmenu.propTypes = {
    id: PropTypes.string.isRequired,

    title: PropTypes.string.isRequired,

    subs: PropTypes.arrayOf(PropTypes.shape({

        id: PropTypes.string.isRequired,

        title: PropTypes.string.isRequired,

        url: PropTypes.string.isRequired

    })).isRequired
};

// #endregion

export { NavBar };
