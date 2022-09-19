import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as cartActions } from 'store/slices/cart.slice';
import { CartTemplate } from 'components/templates';

const Cart = function () {

    const dispatch = useDispatch();
    const cartSlice = useSelector((state) => state.cart);
    const productSlice = useSelector((state) => state.product);

    if (cartSlice.error !== '') throw new Error(cartSlice.error);

    if (productSlice.error !== '') throw new Error(productSlice.error);

    if (cartSlice.isLoading || productSlice.isLoading) return <div />; // TODO: add skeleton templates here

    const items = cartSlice.items.map((item) => ({
        quantity: item.quantity,
        product: productSlice.list.find((product) => product.id === item.productId)
    }));

    const handle = {

        quantityAddition: (productId) => {

            const entry = cartSlice.items.find((item) => item.productId === productId);

            if (entry) {

                dispatch(cartActions.update({ productId, quantity: entry.quantity + 1 }));

            }

        },

        quantitySubtraction: (productId) => {

            const entry = cartSlice.items.find((item) => item.productId === productId);

            if (entry) {

                dispatch(cartActions.update({ productId, quantity: entry.quantity - 1 }));

            }

        },

        productRemove: (productId) => dispatch(cartActions.remove(productId))

    };

    return (

        <CartTemplate
            items={items}
            handleAddition={handle.quantityAddition}
            handleSubtraction={handle.quantitySubtraction}
            handleRemove={handle.productRemove}
        />

    );

};

export { Cart };
