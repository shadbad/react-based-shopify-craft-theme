import PropTypes from 'prop-types';
import 'resources/styles/globals.scss';
import styles from './layout.module.scss';

function Layout({ children }) {

    return (
        <>
            <header className={styles.header}>
                <div className='wrapper'>
                    <p>this is the header</p>
                </div>
            </header>

            <main>
                <div className='wrapper'>
                    {children}
                </div>
            </main>

            <footer>
                <div className='wrapper'>
                    <p>this is the footer part</p>
                </div>
            </footer>
        </>
    );

}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
