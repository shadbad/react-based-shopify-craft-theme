import { UniversalBanner, AppBar, NavBar, NavDrawer, SearchBar } from 'components/organisms';

import 'assets/styles/globals.scss';

const LandingTemplate = function () {

    return (
        <>
            <header>

                <UniversalBanner />

                <AppBar />

                <NavBar />

            </header>

            <main>
                <div className="wrapper" />
            </main>

            <NavDrawer />

            <SearchBar />
        </>
    );

};

export { LandingTemplate };
