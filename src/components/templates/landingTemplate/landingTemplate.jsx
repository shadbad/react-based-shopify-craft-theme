import { TextHeading } from 'components/atoms';
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

                    <TextHeading type={1} className="main-heading">
                        Sustainably crafted goods to elevate
                        <br />
                        your everyday.
                    </TextHeading>

                    <CategoryGroup />
                </div>
            </main>

            <NavDrawer />

            <SearchBar />
        </>
    );

};

export { LandingTemplate };
