import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/atoms';
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

            <a
                href="https://github.com/shadbad/react-based-shopify-craft-theme"
                title="check out the source code"
                target="_blank"
                rel="noopener noreferrer"
                className="source-code-link"
            >
                <Icon name="github" />
            </a>
        </>
    );

});

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

Layout.defaultProps = {};

export { Layout };
