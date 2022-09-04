import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './card-post.scss';

const CardPost = React.memo(function ({ className, href, cover, title, date, summary }) {

    const dateFormatter = useCallback((dateTime) => {

        const parts = new Intl
            .DateTimeFormat('en-GB', { month: 'long', year: 'numeric', day: 'numeric' })
            .formatToParts(new Date(dateTime))
            .filter((part) => part.type !== 'literal');

        return `${parts[1].value} ${parts[0].value}. ${parts[2].value}`;

    });

    return (

        <Link className={`card-post ${className}`} to={href}>

            <span className="card-post__cover" style={{ backgroundImage: `url(${cover})` }} />

            <strong className="card-post__title">{title}</strong>

            <time className="card-post__date" dateTime={new Date(date).toISOString()}>{dateFormatter(date)}</time>

            <span className="card-post__summary">{summary}</span>

        </Link>

    );

});

CardPost.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired
};

CardPost.defaultProps = {
    className: ''
};

export { CardPost };
