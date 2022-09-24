import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TextHeading, TextDate } from 'components/atoms';

const PostTemplate = function ({ post }) {

    const containerRef = useRef();

    useLayoutEffect(() => {

        containerRef.current.innerHtml = post.body;

    }, []);

    return (
        <div className="post-template">

            <div className="post-template__header">

                <img src={post.cover} alt={post.title} />

                <TextHeading type={1}>{post.title}</TextHeading>

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
