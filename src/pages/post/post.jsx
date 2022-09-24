import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostTemplate } from 'components/templates';

const Post = function () {

    const postSlug = useParams().slug;

    const blogSlice = useSelector((state) => state.blog);

    if (blogSlice.error !== '') throw new Error(blogSlice.error);

    if (blogSlice.isLoading) return <div />; // TODO: add skeleton templates here

    const post = blogSlice.posts.find((p) => p.slug === postSlug);

    return <PostTemplate post={post} />;

};

export { Post };
