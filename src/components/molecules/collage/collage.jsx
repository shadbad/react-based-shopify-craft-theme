import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import './collage.scss';

const Collage = React.memo(function ({ className, children }) {

    const tmp = children.flat();
    const items = tmp.length > 4 ? tmp.slice(0, 5) : tmp.slice(0, 3);

    // if (items.length !== 3 && items.length !== 5) throw new Error('Collage supports either 5 or 3 pieces.');

    console.log(items);

    return (

        <ul className={`collage--${items.length}-piece ${className}`}>

            {
                items.map((item) => <li key={nanoid()} className="collage__item-wrapper">{item}</li>)
            }

        </ul>
    );

});

Collage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node).isRequired
};

Collage.defaultProps = {
    className: ''
};

export { Collage };
