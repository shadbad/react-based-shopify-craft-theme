import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { TextHeading, TextPrice, Button } from 'components/atoms';
import { CollageProduct, ButtonQuantity, Accordion, Banner } from 'components/molecules';
import './product-template.scss';

const ProductTemplate = function ({ product, banner }) {

    const contentRef = useRef();

    const [quantity, setQuantity] = useState(product.stock === 0 ? 0 : 1);

    useEffect(() => {

        contentRef.current.innerHTML = product.content;

    }, []);

    return (

        <div className="product-template">

            <div className="product-template__info-gallery-wrapper">

                <div className="product-template__info">

                    <div className="product-template__info__wrapper">

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

                            <span className="product-template__info__cart__qty-label">Quantity</span>
                            <ButtonQuantity
                                className="product-template__info__cart__qty"
                                quantity={quantity}
                                setQuantity={setQuantity}
                                min={1}
                                max={product.stock}
                                disabled={product.stock === 0}
                            />

                            <Button className="product-template__info__cart__add" variant="outlined" disabled={product.stock === 0}>Add to cart</Button>

                            <Button className="product-template__info__cart__buy" variant="filled" disabled={product.stock === 0}>Buy it now</Button>

                        </div>

                        <div className="product-template__info__content-wrapper">

                            <div className="notice">

                                {'This is a demonstration store. You can purchase products like this from '}

                                <a href="https://fablehome.co/" target="_blank" rel="noreferrer">Fable</a>
                                .
                            </div>

                            <div className="content" ref={contentRef} />

                        </div>

                        <div className="product-template__spec-wrapper">
                            {
                                product.spec.map((spec) => (

                                    <Accordion
                                        key={nanoid()}
                                        className="product-template__spec"
                                        iconName={spec.key.toLowerCase().replace(' ', '-')}
                                        title={spec.key}
                                    >

                                        {spec.value}

                                    </Accordion>

                                ))
                            }
                        </div>

                    </div>
                </div>

                <CollageProduct className="product-template__gallery">
                    {
                        product.images.map((image) => <img key={nanoid()} src={image} alt="" />)
                    }
                </CollageProduct>

            </div>

            {
                banner && (
                    <Banner
                        className="product-template__banner"
                        title={banner.title}
                        body={banner.body}
                        image={banner.background}
                        linkText={banner.link.title}
                        href={banner.link.url}
                    />
                )
            }

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

    }).isRequired,

    banner: PropTypes.shape({
        body: PropTypes.string,
        title: PropTypes.string,
        background: PropTypes.string,
        link: PropTypes.shape({
            title: PropTypes.string,
            url: PropTypes.string
        })
    })

};

ProductTemplate.defaultProps = {
    banner: null
};

export { ProductTemplate };
