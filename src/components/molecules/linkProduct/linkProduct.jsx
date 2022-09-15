import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TextPrice } from 'components/atoms';
import './link-product.scss';

const LinkProduct = React.memo(function ({ className, title, price, discount, stock, slug, images, variant }) {

    return (
        <Link className={`link-product--${variant} ${className}`} to={`/products/${slug}`}>

            <span className="link-product__image-wrapper">
                {
                    variant === 'imageExpandOnHover' ?

                        <img className="link-product__image" src={images[0]} alt={title} />
                        :
                        images.slice(0, 2).map((image) => <img className="link-product__image" src={image} alt={title} />)
                }

                {
                    stock > 0 && discount > 0 && <span className="link-product__sale-tag">Sale</span>
                }

                {
                    stock <= 0 && <span className="link-product__sold-out-tag">Sold out</span>
                }
            </span>

            <span className="link-product__title">{title}</span>

            <TextPrice className="link-product__price" price={price} discount={discount} />

        </Link>
    );

});

LinkProduct.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    stock: PropTypes.number,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    variant: PropTypes.oneOf(['imageExpandOnHover', 'imageChangeOnHover'])
};

LinkProduct.defaultProps = {
    className: '',
    discount: 0,
    stock: 1,
    variant: 'imageExpandOnHover'
};

export { LinkProduct };
