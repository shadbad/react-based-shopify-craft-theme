import React from 'react';
import PropTypes from 'prop-types';
import './text-heading.scss';

const TextHeading = React.memo(function ({ className, type, children }) {

    switch (type) {

        case 2:
            return <h2 className={`text-heading-${type} ${className}`}>{children}</h2>;

        case 3:
            return <h3 className={`text-heading-${type} ${className}`}>{children}</h3>;

        case 4:
            return <h4 className={`text-heading-${type} ${className}`}>{children}</h4>;

        default:
            return <h1 className={`text-heading-${type} ${className}`}>{children}</h1>;

    }

});

TextHeading.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf([1, 2, 3, 4]),
    children: PropTypes.node.isRequired
};

TextHeading.defaultProps = {
    className: '',
    type: 1
};

export { TextHeading };
