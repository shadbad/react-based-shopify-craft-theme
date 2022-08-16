import { Header, Footer } from 'components/organisms';

import 'assets/styles/globals.scss';

const LandingTemplate = function () {

    return (
        <>
            <Header />

            <main>
                <div className="wrapper">
                    <h1>This is the landing page</h1>
                </div>
            </main>

            <Footer />
        </>
    );

};

export { LandingTemplate };
