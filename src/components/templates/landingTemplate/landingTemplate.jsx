import { Header, Footer, UniversalBanner, AppBar } from 'components/organisms';

import 'assets/styles/globals.scss';

const LandingTemplate = function () {

    return (
        <>
            <UniversalBanner />

            <AppBar />

            <Header />

            <main>
                <div className="wrapper" />
            </main>

            <Footer />
        </>
    );

};

export { LandingTemplate };
