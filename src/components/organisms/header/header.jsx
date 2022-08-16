import React, { useReducer } from 'react';
import { Announcement } from 'components/atoms';
import { HeaderDrawer, NavBar, SearchBar } from 'components/molecules';
import { useDataProvider, useWindowResizeEffect } from 'hooks';

import styles from './header.module.scss';

const Header = React.memo(function () {

    // #region State

    const reducer = function (state, action) {

        switch (action.type) {

            case 'toggleMenu':
                return { ...state, menuIsExpanded: !state.menuIsExpanded };

            case 'toggleSearch':
                return { ...state, searchIsVisible: !state.searchIsVisible };

            case 'calcNavBarTopPosition': {

                if (parseFloat(window.innerWidth) <= 1000) {

                    const announcement = document.querySelector(`header .${styles.announcement}`);
                    const drawer = document.querySelector(`header .${styles.drawer}`);

                    const announcementHeight = announcement ? parseFloat(announcement.getBoundingClientRect().height) : 0;
                    const drawerHeight = drawer ? parseFloat(drawer.getBoundingClientRect().height) : 0;

                    return { ...state, navBarTopPosition: announcementHeight + drawerHeight };

                }

                return { ...state, navBarTopPosition: 0 };

            }

            default:
                throw new Error();

        }

    };

    const [state, dispatch] = useReducer(reducer, { menuIsExpanded: false, searchIsVisible: false, navBarTopPosition: 0 });

    // #endregion

    // #region Fetching Data

    const announcement = useDataProvider('announcement');

    const categories = useDataProvider('categories');

    const socialLinks = useDataProvider('SOCIAL_PLATFORMS');

    // #endregion

    useWindowResizeEffect(() => dispatch({ type: 'calcNavBarTopPosition' }));

    return (
        <header>

            {
                announcement.status === 'done' &&
                (
                    <Announcement
                        className={styles.announcement}
                        text={announcement.data.text}
                        url={announcement.data.url}
                    />
                )
            }

            <HeaderDrawer
                className={styles.drawer}
                menuIsExpanded={state.menuIsExpanded}
                menuClickHandler={() => dispatch({ type: 'toggleMenu' })}
                searchClickHandler={() => dispatch({ type: 'toggleSearch' })}
                cartBadge="0"
            />

            <SearchBar
                className={styles.search}
                searchBarVisibility={state.searchIsVisible}
                setSearchBarVisibility={() => dispatch({ type: 'toggleSearch' })}
            />

            {
                (categories.status === 'done' && socialLinks.status === 'done') &&
                (
                    <NavBar
                        className={styles.nav}
                        links={categories.data}
                        menuIsExpanded={state.menuIsExpanded}
                        socialLinks={socialLinks.data}
                        topPosition={state.navBarTopPosition}
                    />
                )
            }

        </header>
    );

});

Header.defaultProps = {
    announcement: null
};

export { Header };
