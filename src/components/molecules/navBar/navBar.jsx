import React from 'react';
import PropTypes, { string } from 'prop-types';
import { NavigationLink } from 'components/atoms';

import styles from './nav-bar.module.scss';

const NavBar = React.memo(function ({ links }) {

    function renderLink(link) {

        return (
            <li key={link.id}>
                <NavigationLink title={link.title} url={link.url} mod="main-link" />
            </li>
        );

    }

    function renderLinkWithSubs(link) {

        return (
            <li key={link.id}>

                <span>{link.title}</span>

                <ul className={styles.subMenu} data-title={link.title}>

                    {

                        link.subs.map(

                            (subItem) => (

                                <li key={subItem.id}>
                                    <NavigationLink title={subItem.title} url={subItem.url} mod="sub-link" />
                                </li>

                            )

                        )

                    }

                </ul>

            </li>
        );

    }

    return (
        <div className={styles.container}>
            <nav>
                <ul className={styles.mainMenu}>
                    {
                        links.map((link) => {

                            if (!link.subs || link.subs.length === 0) return renderLink(link);
                            return renderLinkWithSubs(link);

                        })
                    }
                </ul>
            </nav>
        </div>
    );

});

NavBar.propTypes = {

    links: PropTypes.arrayOf(PropTypes.shape({

        id: string.isRequired,

        title: string.isRequired,

        url: string,

        subs: PropTypes.arrayOf(PropTypes.shape({

            id: string.isRequired,

            title: string.isRequired,

            url: string.isRequired

        }))

    })).isRequired

};

export { NavBar };
