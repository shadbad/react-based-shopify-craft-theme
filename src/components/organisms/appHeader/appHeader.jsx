import React from 'react';
import { UniversalBanner, AppBar, NavBar } from 'components/organisms';

const AppHeader = React.memo(function () {

    return (
        <header className="app__header">

            <UniversalBanner />

            <AppBar />

            <NavBar />

        </header>
    );

});

export { AppHeader };
