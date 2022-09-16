import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { TextHeading, TextPrice, Button } from 'components/atoms';
import { CollageProduct } from 'components/molecules';
import './product-template.scss';

const ProductTemplate = function ({ product }) {

    const contentRef = useRef();

    useEffect(() => {

        contentRef.current.innerHTML = product.content;

    }, []);

    return (

        <div className="product-template">

            <div className="product-template__info">

                <hgroup className="product-template__info__heading-group">

                    {product.caption !== '' && <span className="caption">{product.caption}</span>}

                    <TextHeading className="heading" type={1}>
                        {product.title}
                    </TextHeading>

                    {product.subtitle !== '' && <span className="subtitle">{product.subtitle}</span>}

                </hgroup>

                <TextPrice
                    className={`product-template__info__price ${product.discount > 0 ? 'sale' : ''}`}
                    price={product.price}
                    discount={product.discount}
                />

                <div className="product-template__info__cart">

                    <Button className="product-template__info__cart__add" variant="outlined">Add to cart</Button>
                    <Button className="product-template__info__cart__buy" variant="filled">Buy it now</Button>

                </div>

                <div className="product-template__info__content-wrapper">

                    <div className="notice">

                        {'This is a demonstration store. You can purchase products like this from '}

                        <a href="https://fablehome.co/" target="_blank" rel="noreferrer">Fable</a>
                        .
                    </div>

                    <div className="content" ref={contentRef} />

                </div>

            </div>

            <CollageProduct className="product-template__gallery">
                {
                    product.images.map((image) => <img key={nanoid()} src={image} alt="" />)
                }
            </CollageProduct>

        </div>

    );

};

ProductTemplate.propTypes = {

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

    }).isRequired

};

export { ProductTemplate };
