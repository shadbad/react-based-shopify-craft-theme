import React from 'react';
import PropTypes from 'prop-types';

const Accordion = function ({ className }) {

    return (
        <div className={`accordion ${className}`} />
    );

};

Accordion.propTypes = {
    className: PropTypes.string
};

Accordion.defaultProps = {
    className: ''
};

export { Accordion };
