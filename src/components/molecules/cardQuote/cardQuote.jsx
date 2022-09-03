import React from 'react';
import PropTypes from 'prop-types';
import './card-quote.scss';

const CardQuote = React.memo(function ({ className, quote, author }) {

    return (

        <div className={`card-quote ${className}`}>

            <blockquote className="card-quote__quote">{quote}</blockquote>

            <span className="card-quote__author">{author}</span>

        </div>

    );

});

CardQuote.propTypes = {
    className: PropTypes.string,
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

CardQuote.defaultProps = {
    className: ''
};

export { CardQuote };
