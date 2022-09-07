/* eslint-disable no-unreachable */
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
    const products = Collection.findProducts(productSlice, category.id);

    return (

        <CollectionTemplate category={category} products={products} />

    );

};

Collection.findCategory = function (categorySlice, categorySlug) {

    const flatList = categorySlice.list.flatMap((item) => {

        if (item.subs && item.subs.length > 0) return [...item.subs, item];

        return item;

    });

    return flatList.find((item) => item.slug === categorySlug.toLowerCase());

};

Collection.findProducts = function (productSlice, categoryId) {

    return productSlice.list.filter((item) => item.categoryId === categoryId);

};

export { Collection };
