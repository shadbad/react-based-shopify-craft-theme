import React from 'react';
import PropTypes from 'prop-types';
import { TextHeading, TextPrice, Link } from 'components/atoms';
import { ButtonQuantity, ButtonIcon, LinkProduct } from 'components/molecules';
import { useJumpToTop } from 'hooks';
import './cart-template.scss';

const CartTemplate = function ({ items, handleAddition, handleSubtraction, handleRemove, bestsellers }) {

    useJumpToTop();

    const calculate = {

        totalPrice: (price, discount, quantity) => (price - (price * discount)) * quantity,

        subtotal: items.reduce((subtotal, item) => subtotal + item.quantity * (item.product.price - (item.product.price * item.product.discount)), 0)

    };

    return (
        <>
            {
                items.length > 0 && (
                    <>
                        <div className="cart-template__header">
                            <TextHeading className="cart-template__header__heading" type={1}>Your cart</TextHeading>

                            <Link className="cart-template__header__continue" href="/collections/all" variant="underlined">Continue shopping</Link>
                        </div>
                        <table className="cart-template__table">
                            <thead className="cart-template__table__header">
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>

                            <tbody className="cart-template__table__body">

                                {
                                    items.map((item) => (

                                        <tr key={item.product.id} className="cart-template__table__body__row">

                                            <td className="cart-template__table__body__row__image-link-price">

                                                <img
                                                    className="cart-template__table__body__row__image-link-price__image"
                                                    src={item.product.images[0]}
                                                    alt={item.product.title}
                                                />

                                                <div>
                                                    <Link
                                                        href={`/products/${item.product.slug}`}
                                                        variant="underlineOnHover"
                                                        className="cart-template__table__body__row__image-link-price__link"
                                                    >
                                                        {item.product.title}
                                                    </Link>

                                                    <TextPrice
                                                        className="cart-template__table__body__row__image-link-price__price"
                                                        price={item.product.price}
                                                        discount={item.product.discount}
                                                    />
                                                </div>

                                            </td>

                                            <td className="cart-template__table__body__row__quantity">

                                                <ButtonQuantity
                                                    className="cart-template__table__body__row__quantity__button"
                                                    value={item.quantity}
                                                    min={1}
                                                    max={item.product.stock}
                                                    handleAddition={() => handleAddition(item.product.id)}
                                                    handleSubtraction={() => handleSubtraction(item.product.id)}
                                                />

                                                <ButtonIcon
                                                    className="cart-template__table__body__row__quantity__remove"
                                                    iconName="trash"
                                                    variant="expandOnHover"
                                                    onClick={() => handleRemove(item.product.id)}
                                                />

                                            </td>

                                            <td className="cart-template__table__body__row__total">

                                                <TextPrice
                                                    className="cart-template__table__body__row__total__text"
                                                    price={calculate.totalPrice(item.product.price, item.product.discount, item.quantity)}
                                                    discount={0}
                                                />

                                            </td>
                                        </tr>

                                    ))
                                }

                            </tbody>

                            <tfoot className="cart-template__table__footer">

                                <tr className="cart-template__table__footer__subtotal-row">

                                    <td colSpan={3}>

                                        <TextHeading className="cart-template__table__footer__heading" type={4}>Subtotal</TextHeading>

                                        <TextPrice className="cart-template__table__footer__price" price={calculate.subtotal} />

                                    </td>

                                </tr>

                                <tr className="cart-template__table__footer__note-row">

                                    <td colSpan={3}>
                                        Taxes and shipping calculated at checkout
                                    </td>

                                </tr>

                                <tr className="cart-template__table__footer__check-out-row">
                                    <td colSpan={3}>
                                        <Link className="cart-template__table__footer__check-out-row__button" href="/check-out" variant="button">Check out</Link>
                                    </td>
                                </tr>

                            </tfoot>

                        </table>
                    </>
                )
            }

            {
                items.length === 0 && (
                    <div className="cart-template__empty">

                        <TextHeading className="cart-template__empty__heading" type={1}>Your cart is empty</TextHeading>

                        <Link
                            className="cart-template__empty__continue"
                            href="/collections/all"
                            variant="button"
                        >

                            Continue shopping

                        </Link>
                    </div>
                )
            }

            <div className="cart-template__best-sellers">

                <TextHeading className="cart-template__best-sellers__heading" type={3}>Shop our bestsellers</TextHeading>

                <ul className="cart-template__best-sellers__list">

                    {
                        // className, title, price, discount, stock, slug, images,
                        bestsellers.map((product) => (
                            <li key={product.id}>
                                <LinkProduct
                                    title={product.title}
                                    price={product.price}
                                    discount={product.discount}
                                    stock={product.stock}
                                    slug={product.slug}
                                    images={product.images}
                                />
                            </li>
                        ))
                    }

                </ul>

                <Link className="cart-template__best-sellers__view-all-button" href="/collections/all" variant="button">View all</Link>

            </div>
        </>
    );

};

CartTemplate.productShape = PropTypes.shape({
    quantity: PropTypes.number,
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        categoryId: PropTypes.string.isRequired,
        caption: PropTypes.string,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        stock: PropTypes.number.isRequired,
        sales: PropTypes.number.isRequired,
        date: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        spec: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })).isRequired
    })
});

// TODO: move the product shape to a shared domain
CartTemplate.propTypes = {
    items: PropTypes.arrayOf(CartTemplate.productShape).isRequired,
    handleAddition: PropTypes.func.isRequired,
    handleSubtraction: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
    bestsellers: PropTypes.arrayOf(CartTemplate.productShape).isRequired
};

export { CartTemplate };
