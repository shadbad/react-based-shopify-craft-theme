import React from 'react';
import { useSelector } from 'react-redux';
import { LandingTemplate } from 'components/templates';

const Landing = function () {

    const content = useSelector((state) => state.content);

    if (content.error !== '') throw new Error(content.error);

    const posts = useSelector((state) => state.blog.posts);

    if (posts.error !== '') throw new Error(posts.error);

    if (content.isLoading || posts.isLoading) return <div />; // TODO: add skeleton templates here

    return (
        <LandingTemplate content={content.data.landing} posts={posts} />
    );

};

export { Landing };
