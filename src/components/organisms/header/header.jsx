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

            case 'calcTopPositions': {

                const announcement = document.querySelector(`.${styles.announcement}`);

                const announcementHeight = announcement ? parseFloat(announcement.getBoundingClientRect().height) : 0;

                const drawer = document.querySelector(`header .${styles.drawer}`);

                let navBarTopPosition = 0;
                const searchBarTopPosition = announcementHeight;

                if (parseFloat(window.innerWidth) <= 1000) {

                    const drawerHeight = drawer ? parseFloat(drawer.getBoundingClientRect().height) : 0;

                    navBarTopPosition = announcementHeight + drawerHeight;

                }

                return { ...state, searchBarTopPosition, navBarTopPosition };

            }

            case 'setSearchQuery': {

                return { ...state, searchQuery: action.payload.query || '' };

            }

            default:
                throw new Error();

        }

    };

    const [state, dispatch] = useReducer(

        reducer,

        {
            menuIsExpanded: false,
            searchIsVisible: false,
            navBarTopPosition: 0,
            searchBarTopPosition: 0,
            searchQuery: ''
        }

    );

    // #endregion

    // #region Fetching Data

    const announcement = useDataProvider('announcement');

    const categories = useDataProvider('categories');

    const socialLinks = useDataProvider('SOCIAL_PLATFORMS');

    const searchResult = useDataProvider('PRODUCTS', { query: state.searchQuery }, [state.searchQuery]);

    // #endregion

    useWindowResizeEffect(() => dispatch({ type: 'calcTopPositions' }));

    return (
        <header className={styles.root}>

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
                visibility={state.searchIsVisible}
                setVisibility={() => dispatch({ type: 'toggleSearch' })}
                topPosition={state.searchBarTopPosition}
                query={state.searchQuery}
                setQuery={(query) => dispatch({ type: 'setSearchQuery', payload: { query } })}
                searchResult={searchResult}
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
