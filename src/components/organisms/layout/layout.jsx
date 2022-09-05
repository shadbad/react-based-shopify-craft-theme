import React from 'react';
import PropTypes from 'prop-types';
import { UniversalBanner, AppBar, NavBar, NavDrawer, SearchBar, SubscriptionForm } from 'components/organisms';

import 'assets/styles/globals.scss';
import './layout.scss';

const Layout = React.memo(function ({ children }) {

    return (
        <>
            <header className="layout__header">

                <UniversalBanner />

                <AppBar />

                <NavBar />

            </header>

            <main className="layout__main">

                <div className="layout__main-wrapper">

                    {children}

                </div>

            </main>

            <footer className="layout__footer">

                <div className="layout__footer-wrapper">

                    <SubscriptionForm className="layout__subscription-form" theme="dark" />

                </div>

            </footer>

            <NavDrawer />

            <SearchBar />
        </>
    );

});

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

Layout.defaultProps = {};

export { Layout };
