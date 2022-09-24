import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TextHeading, TextDate } from 'components/atoms';
import './post-template.scss';

const PostTemplate = function ({ post }) {

    const containerRef = useRef();

    useLayoutEffect(() => {

        containerRef.current.innerHTML = post.body;

    }, []);

    return (
        <div className="post-template">

            <span className="post-template__image" style={{ backgroundImage: `url(${post.cover})` }} />

            <div className="post-template__header">

                <TextHeading className="post-template__header__title" type={1}>{post.title}</TextHeading>

                <TextDate className="post-template__header__date" date={post.date} />

            </div>

            <div className="post-template__body" ref={containerRef} />

        </div>
    );

};

PostTemplate.propTypes = {
    post: PropTypes.shape({

        id: PropTypes.string,

        title: PropTypes.string,

        url: PropTypes.string,

        date: PropTypes.number,

        cover: PropTypes.string,

        summary: PropTypes.string,

        body: PropTypes.string

    }).isRequired
};

export { PostTemplate };
