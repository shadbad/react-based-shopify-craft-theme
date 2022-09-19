import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as cartActions } from 'store/slices/cart.slice';
import { Icon, Link } from 'components/atoms';
import { ButtonIcon } from 'components/molecules';
import './notification-cart.scss';

const NotificationCart = React.memo(function () {

    const productSlice = useSelector((state) => state.product);
    const cartSlice = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    if (productSlice.error !== '') throw new Error(productSlice.error);

    if (cartSlice.error !== '') throw new Error(cartSlice.error);

    if (cartSlice.isLoading || productSlice.isLoading) return <div />; // TODO: add skeleton templates here

    const { productId } = cartSlice.notification;

    if (!productId || productId === '') return <div />;

    const product = productSlice.list.find((p) => p.id === productId);

    const totalItemsInCart = cartSlice.items.reduce((total, item) => total + item.quantity, 0);

    const handle = {
        closeClick: () => dispatch(cartActions.removeNotification())
    };

    return (
        <div className={`notification-cart ${cartSlice.notification.isVisible ? 'visible' : ''}`}>

            <div className="notification-cart__header">

                <Icon className="notification-cart__header__icon" name="check" />

                <span className="notification-cart__header__text">Item added to your cart</span>

                <ButtonIcon
                    className="notification-cart__header__close-button"
                    variant="expandOnHover"
                    iconName="cross"
                    onClick={handle.closeClick}
                />

            </div>

            <div className="notification-cart__product">

                <img
                    className="notification-cart__product__image"
                    src={product.images[0]}
                    alt={product.title}
                />

                <span className="notification-cart__product__title">{product.title}</span>

            </div>

            <div className="notification-cart__button-links">

                <Link
                    className="notification-cart__button-links__cart"
                    href="/cart"
                    variant="button"
                >

                    {`View my cart (${totalItemsInCart})`}

                </Link>

                <Link
                    className="notification-cart__button-links__checkout"
                    href="/checkout"
                    variant="button"
                >

                    Check out

                </Link>

                <Link
                    className="notification-cart__button-links__continue"
                    href="/collections/all"
                    variant="underlined"
                >

                    Continue shopping

                </Link>

            </div>

        </div>
    );

});

export { NotificationCart };
