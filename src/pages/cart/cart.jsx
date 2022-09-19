import React from 'react';
import { useSelector } from 'react-redux';
import { CartTemplate } from 'components/templates';

const Cart = function () {

    const cartSlice = useSelector((state) => state.cart);
    const productSlice = useSelector((state) => state.product);

    if (cartSlice.error !== '') throw new Error(cartSlice.error);

    if (productSlice.error !== '') throw new Error(productSlice.error);

    if (cartSlice.isLoading || productSlice.isLoading) return <div />; // TODO: add skeleton templates here

    const items = cartSlice.items.map((item) => ({
        quantity: item.quantity,
        product: productSlice.list.find((product) => product.id === item.productId)
    }));

    return <CartTemplate items={items} />;

};

export { Cart };
