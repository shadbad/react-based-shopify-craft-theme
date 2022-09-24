import React from 'react';
import PropTypes from 'prop-types';
import { Paginator, CardPost } from 'components/molecules';
import './blog-template.scss';

const BlogTemplate = function ({ posts }) {

    return (

        <Paginator className="blog-template__paginator" size={12}>

            {
                posts.map((post) => (

                    <CardPost
                        key={post.id}
                        className="blog-template__post"
                        href={`/blog/${post.slug}`}
                        cover={post.cover}
                        title={post.title}
                        summary={post.summary}
                        date={post.date}
                    />

                ))
            }

        </Paginator>

    );

};

BlogTemplate.propTypes = {

    posts: PropTypes.arrayOf(PropTypes.shape({

        id: PropTypes.string,

        title: PropTypes.string,

        slug: PropTypes.string,

        date: PropTypes.number,

        cover: PropTypes.string,

        summary: PropTypes.string,

        body: PropTypes.string

    })).isRequired

};

export { BlogTemplate };
