import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { TextHeading, Link } from 'components/atoms';
import './sitemap.scss';

const Sitemap = React.memo(function ({ className, title, links, theme }) {

    return (

        <div className={`sitemap--${theme} ${className}`}>

            <TextHeading className="sitemap__heading" type={4}>{title}</TextHeading>

            <ul className="sitemap__list">
                {
                    links.map((item) => (

                        <li className="sitemap__list-item" key={nanoid()}>

                            <Link
                                className="sitemap__link"
                                href={item.url}
                                variant="underlineOnHover"
                            >

                                {item.title}

                            </Link>

                        </li>
                    ))

                }
            </ul>

        </div>

    );

});

Sitemap.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
    })).isRequired,
    theme: PropTypes.oneOf(['light', 'dark'])
};

Sitemap.defaultProps = {
    className: '',
    title: '',
    theme: 'light'
};

export { Sitemap };
