import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import './collage.scss';

const Collage = React.memo(function ({ className, children }) {

    return (

        <ul className={`collage ${className}`}>

            {
                children.map((item) => <li key={nanoid()} className="collage__item-wrapper">{item}</li>)
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
