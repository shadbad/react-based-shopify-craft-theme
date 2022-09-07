import React from 'react';
import { useSelector } from 'react-redux';
import { LandingTemplate } from 'components/templates';

const Landing = function () {

    const content = useSelector((state) => state.content);

    if (content.error !== '') throw new Error(content.error);

    const blog = useSelector((state) => state.blog);

    if (blog.error !== '') throw new Error(blog.error);

    if (content.isLoading || blog.isLoading) return <div />; // TODO: add skeleton templates here

    return (
        <LandingTemplate content={content.data.landing} posts={blog.posts} />
    );

};

export { Landing };
