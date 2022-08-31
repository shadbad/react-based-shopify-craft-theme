import { UniversalBanner, AppBar, NavBar, NavDrawer, SearchBar, CategoryGroup } from 'components/organisms';

import 'assets/styles/globals.scss';
import './landing-template.scss';

const LandingTemplate = function () {

    return (
        <>
            <header>

                <UniversalBanner />

                <AppBar />

                <NavBar />

            </header>

            <main>
                <div className="wrapper">

                    <h1>
                        Sustainably crafted goods to elevate
                        <br />
                        your everyday.
                    </h1>

                    <CategoryGroup />
                </div>
            </main>

            <NavDrawer />

            <SearchBar />
        </>
    );

};

export { LandingTemplate };
