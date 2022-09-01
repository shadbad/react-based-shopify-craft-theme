import { TextHeading } from 'components/atoms';
import { Video } from 'components/molecules';
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

            <main className="landing">

                <div className="landing__wrapper">

                    <TextHeading type={1} className="landing__heading">
                        Sustainably crafted goods to elevate
                        <br />
                        your everyday.
                    </TextHeading>

                    <CategoryGroup className="landing__category-group" />

                    <div className="landing__authority">

                        <TextHeading type={3} className="landing__authority-heading">
                            The details matter
                        </TextHeading>

                        <Video className="landing__authority-video" source="/videos/about.mp4" cover="/videos/about-cover.webp" />

                    </div>

                    <div className="landing__testimonials">

                        <TextHeading type={3} className="landing__testimonials-heading">
                            We believe in simple, timeless, and responsible designs.
                        </TextHeading>

                    </div>

                </div>

            </main>

            <NavDrawer />

            <SearchBar />
        </>
    );

};

export { LandingTemplate };
