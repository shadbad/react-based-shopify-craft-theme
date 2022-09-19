import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductTemplate } from 'components/templates';
import { NotificationCart } from 'components/organisms';

const Product = function () {

    const { slug } = useParams();

    const productSlice = useSelector((state) => state.product);

    const contentSlice = useSelector((state) => state.content);

    if (productSlice.error !== '' || contentSlice.error !== '') throw new Error(productSlice.error);

    if (productSlice.isLoading || contentSlice.isLoading) return <div />; // TODO: add skeleton templates here

    const product = Product.findProduct(productSlice, slug);

    const relatedProducts = Product.getRelatedProducts(productSlice, product.id, product.categoryId);

    return (

        <>

            <ProductTemplate product={product} relatedProducts={relatedProducts} banner={contentSlice.data.product.banner} key={product.id} />

            <NotificationCart />

        </>

    );

};

Product.findProduct = function (productSlice, productSlug) {

    return productSlice.list.find((item) => item.slug === productSlug.toLowerCase());

};

Product.getRelatedProducts = function (productSlice, productId, categoryId) {

    const result = productSlice.list
        .filter((product) => product.categoryId === categoryId && product.id !== productId && product.stock > 0)
        .sort((a, b) => {

            if (a.sales < b.sales) return 1;
            if (a.sales === b.sales) return 0;
            return -1;

        })
        .slice(0, 4);

    if (result.length < 4) {

        const extras = productSlice.list
            .filter((product) => product.id !== productId && product.stock > 0)
            .sort((a, b) => {

                if (a.sales < b.sales) return 1;
                if (a.sales === b.sales) return 0;
                return -1;

            })
            .slice(0, 4 - result.length);

        return result.concat(extras);

    }

    return result;

};

export { Product };
