import PropTypes from 'prop-types';

import { Header } from 'components/organisms';

import 'assets/styles/globals.scss';

const Layout = function ({ children }) {

    return (
        <>
            <Header announcement={{ text: 'check out our latest bundled collections', url: 'https://shadbad.github.io' }} />

            <main>
                <div className="wrapper">
                    {children}
                </div>
            </main>

            <footer>
                <div className="wrapper">
                    <p>this is the footer part</p>
                </div>
            </footer>
        </>
    );

};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export { Layout };
