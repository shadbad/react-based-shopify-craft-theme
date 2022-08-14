import React, { useState } from 'react';
import { Announcement } from 'components/atoms';
import { HeaderDrawer, NavBar } from 'components/molecules';

import { useDataProvider } from 'hooks';

const Header = React.memo(function () {

    const [menuIsExpanded, setMenuIsExpanded] = useState(false);

    const announcement = useDataProvider('announcement');

    const categories = useDataProvider('categories');

    const eventHandlers = {

        menuClick() {

            setMenuIsExpanded((prevMenuIsExpanded) => !prevMenuIsExpanded);

        },

        searchClick() {

            alert('search button clicked');

        }

    };

    return (
        <header>

            {announcement.status === 'done' && <Announcement text={announcement.data.text} url={announcement.data.url} />}

            <HeaderDrawer
                menuIsExpanded={menuIsExpanded}
                menuClickHandler={eventHandlers.menuClick}
                searchClickHandler={eventHandlers.searchClick}
                cartBadge="0"
            />

            <div className="search" />

            {categories.status === 'done' && <NavBar links={categories.data} menuIsExpanded={menuIsExpanded} />}

        </header>
    );

});

Header.defaultProps = {
    announcement: null
};

export { Header };
