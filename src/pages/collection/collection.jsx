import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CollectionTemplate } from 'components/templates';

const Collection = function () {

    const { slug } = useParams();
    const categorySlice = useSelector((state) => state.category);
    const productSlice = useSelector((state) => state.product);

    if (categorySlice.error !== '') throw new Error(categorySlice.error);

    if (productSlice.error !== '') throw new Error(productSlice.error);

    if (productSlice.isLoading || categorySlice.isLoading) return <div />; // TODO: add skeleton templates here

    const category = Collection.findCategory(categorySlice, slug);
    const products = Collection.findProducts(productSlice, category);

    return (

        <CollectionTemplate category={category} products={products} key={category.slug} />

    );

};

Collection.findCategory = function (categorySlice, categorySlug) {

    if (categorySlug.toLowerCase() === 'all') return { id: 'root', title: 'Products', url: '/collections/all' };

    const flatList = categorySlice.list.flatMap((item) => {

        if (item.subs && item.subs.length > 0) return [...item.subs, item];

        return item;

    });

    return flatList.find((item) => item.slug === categorySlug.toLowerCase());

};

Collection.findProducts = function (productSlice, category) {

    if (category.id === 'root') return Array.from(productSlice.list);

    if (category.subs && category.subs.length > 0) {

        const categoryIds = category.subs.map((sub) => sub.id);

        return productSlice.list.filter((item) => categoryIds.includes(item.categoryId));

    }

    return productSlice.list.filter((item) => item.categoryId === category.id);

};

export { Collection };
