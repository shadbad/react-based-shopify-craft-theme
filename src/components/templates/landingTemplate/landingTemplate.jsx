import { Header, Footer, UniversalBanner } from 'components/organisms';

import 'assets/styles/globals.scss';

const LandingTemplate = function () {

    return (
        <>
            <UniversalBanner />

            <Header />

            <main>
                <div className="wrapper" />
            </main>

            <Footer />
        </>
    );

};

export { LandingTemplate };
