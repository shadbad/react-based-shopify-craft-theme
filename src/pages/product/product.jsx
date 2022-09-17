import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductTemplate } from 'components/templates';

const Product = function () {

    const { slug } = useParams();

    const productSlice = useSelector((state) => state.product);

    const contentSlice = useSelector((state) => state.content);

    if (productSlice.error !== '' || contentSlice.error !== '') throw new Error(productSlice.error);

    if (productSlice.isLoading || contentSlice.isLoading) return <div />; // TODO: add skeleton templates here

    const product = Product.findProduct(productSlice, slug);

    return (

        <ProductTemplate product={product} banner={contentSlice.data.product.banner} key={product.id} />

    );

};

Product.findProduct = function (productSlice, productSlug) {

    return productSlice.list.find((item) => item.slug === productSlug.toLowerCase());

};

export { Product };
