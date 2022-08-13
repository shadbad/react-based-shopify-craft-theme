import React from 'react';
// import PropTypes from 'prop-types';

import { Announcement } from 'components/atoms';
import { HeaderDrawer, NavBar } from 'components/molecules';

import { useDataProvider } from 'hooks';

const Header = React.memo(function () {

    const announcement = useDataProvider('announcement');

    const categories = useDataProvider('categories');

    const eventHandlers = {

        menuClick() {

            alert('menu button clicked');

        },

        searchClick() {

            alert('search button clicked');

        }

    };

    return (
        <header>

            {announcement.status === 'done' && <Announcement text={announcement.data.text} url={announcement.data.url} />}

            <HeaderDrawer menuClickHandler={eventHandlers.menuClick} searchClickHandler={eventHandlers.searchClick} cartBadge="0" />

            <div className="search" />

            {categories.status === 'done' && <NavBar links={categories.data} />}

        </header>
    );

});

Header.defaultProps = {
    announcement: null
};

export { Header };
