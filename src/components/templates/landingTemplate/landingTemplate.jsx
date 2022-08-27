import { Footer, UniversalBanner, AppBar, NavBar, NavDrawer } from 'components/organisms';

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

            <Footer />
        </>
    );

};

export { LandingTemplate };
