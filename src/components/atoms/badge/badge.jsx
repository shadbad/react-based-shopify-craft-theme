import React from 'react';
import PropTypes from 'prop-types';
import './badge.scss';

const Badge = React.memo(function ({ className, value, max }) {

    return (
        <span className={`badge ${className}`}>

            {parseFloat(value) > parseFloat(max) ? `${max}+` : `${value}`}

        </span>
    );

});

Badge.propTypes = {
    className: PropTypes.string,
    value: PropTypes.number.isRequired,
    max: PropTypes.number
};

Badge.defaultProps = {
    className: '',
    max: 99
};

export { Badge };
