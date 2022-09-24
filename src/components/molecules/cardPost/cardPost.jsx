import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TextDate } from 'components/atoms';

import './card-post.scss';

const CardPost = React.memo(function ({ className, href, cover, title, date, summary }) {

    return (

        <Link className={`card-post ${className}`} to={href}>

            <span className="card-post__cover" style={{ backgroundImage: `url(${cover})` }} />

            <strong className="card-post__title">{title}</strong>

            <TextDate className="card-post__date" date={date} />

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
