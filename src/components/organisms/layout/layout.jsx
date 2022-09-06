import React from 'react';
import PropTypes from 'prop-types';
import { NavDrawer, SearchBar, AppFooter, AppHeader } from 'components/organisms';

import 'assets/styles/globals.scss';
import './layout.scss';

const Layout = React.memo(function ({ children }) {

    return (
        <>
            <AppHeader />

            <main className="layout__main">

                <div className="layout__main-wrapper">

                    {children}

                </div>

            </main>

            <AppFooter />

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
