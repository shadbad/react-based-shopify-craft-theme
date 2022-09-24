import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './text-date.scss';

const TextDate = React.memo(function ({ className, date }) {

    const dateFormatter = useCallback((dateTime) => {

        const parts = new Intl
            .DateTimeFormat('en-GB', { month: 'long', year: 'numeric', day: 'numeric' })
            .formatToParts(new Date(dateTime))
            .filter((part) => part.type !== 'literal');

        return `${parts[1].value} ${parts[0].value}. ${parts[2].value}`;

    });

    return <time className={`text-date ${className}`} dateTime={new Date(date).toISOString()}>{dateFormatter(date)}</time>;

});

TextDate.propTypes = {
    className: PropTypes.string,
    date: PropTypes.number.isRequired
};

TextDate.defaultProps = {
    className: ''
};

export { TextDate };
