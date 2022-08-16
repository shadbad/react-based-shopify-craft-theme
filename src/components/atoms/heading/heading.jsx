import React from 'react';
import PropTypes from 'prop-types';

const Heading = React.memo(({ children }) => <h1>{children}</h1>);

Heading.propTypes = {
    children: PropTypes.string.isRequired
};

export { Heading };
