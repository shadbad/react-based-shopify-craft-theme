import React, { useReducer } from 'react';
import { Announcement } from 'components/atoms';
import { HeaderDrawer, NavBar, SearchBar } from 'components/molecules';
import { useDataProvider } from 'hooks';

import styles from './header.module.scss';

const Header = React.memo(function () {

    const announcement = useDataProvider('announcement');

    const categories = useDataProvider('categories');

    const socialLinks = useDataProvider('SOCIAL_PLATFORMS');

    const reducer = function (state, action) {

        switch (action.type) {

            case 'toggleMenu':
                return { ...state, menuIsExpanded: !state.menuIsExpanded };
            case 'toggleSearch':
                return { ...state, searchIsVisible: !state.searchIsVisible };
            default:
                throw new Error();

        }

    };

    const [state, dispatch] = useReducer(reducer, { menuIsExpanded: false, searchIsVisible: false });

    return (
        <header>

            {announcement.status === 'done' && <Announcement text={announcement.data.text} url={announcement.data.url} />}

            <HeaderDrawer
                menuIsExpanded={state.menuIsExpanded}
                menuClickHandler={() => dispatch({ type: 'toggleMenu' })}
                searchClickHandler={() => dispatch({ type: 'toggleSearch' })}
                cartBadge="0"
            />

            <SearchBar
                className={styles.header}
                searchBarVisibility={state.searchIsVisible}
                setSearchBarVisibility={() => dispatch({ type: 'toggleSearch' })}
            />

            {
                (categories.status === 'done' && socialLinks.status === 'done') &&
                <NavBar links={categories.data} menuIsExpanded={state.menuIsExpanded} socialLinks={socialLinks.data} />
            }

        </header>
    );

});

Header.defaultProps = {
    announcement: null
};

export { Header };
