import { useSelector } from 'react-redux';
import { BlogTemplate } from 'components/templates';
import { useJumpToTop } from 'hooks';

const Blog = function () {

    useJumpToTop();

    const blogSlice = useSelector((state) => state.blog);

    if (blogSlice.error !== '') throw new Error(blogSlice.error);

    if (blogSlice.isLoading) return <div />; // TODO: add skeleton templates here

    const posts = [...blogSlice.posts].sort((a, b) => a.date - b.date);

    return <BlogTemplate posts={posts} />;

};

export { Blog };
