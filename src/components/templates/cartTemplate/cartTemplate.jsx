import React from 'react';
import PropTypes from 'prop-types';
import { TextHeading, TextPrice, Link } from 'components/atoms';
// import { ButtonQuantity } from 'components/molecules';
import './cart-template.scss';

const CartTemplate = function ({ items }) {

    return (
        <>
            <div className="cart-template__header">
                <TextHeading type={1}>Your cart</TextHeading>

                <Link href="/collections/all">Continue shopping</Link>
            </div>

            <div className="cart-template__table">

                {
                    items.map((item) => (

                        <div className="cart-template__table__row">

                            <img src={item.product.images[0]} alt={item.product.title} />

                            <div className="cart-template__table__row__link-price">

                                <Link
                                    href={`/products/${item.product.slug}`}
                                    variant="underlineOnHover"
                                    className="cart-template__table__row__link-price__link"
                                >
                                    {item.product.title}
                                </Link>

                                <TextPrice
                                    className="cart-template__table__row__link-price__price"
                                    price={item.product.price}
                                    discount={item.product.discount}
                                />

                            </div>

                            {/* <ButtonQuantity quantity={item.quantity} min={1} max={item.product.stock} /> */}
                        </div>

                    ))
                }

            </div>
        </>
    );

};

// TODO: move the product shape to a shared domain
CartTemplate.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired
};

export { CartTemplate };
