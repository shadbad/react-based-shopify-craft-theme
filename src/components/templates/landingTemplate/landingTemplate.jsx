import { Footer, UniversalBanner, AppBar, NavBar } from 'components/organisms';

import 'assets/styles/globals.scss';

const LandingTemplate = function () {

    return (
        <>
            <UniversalBanner />

            <AppBar />

            <NavBar />

            <main>
                <div className="wrapper" />
            </main>

            <Footer />
        </>
    );

};

export { LandingTemplate };
