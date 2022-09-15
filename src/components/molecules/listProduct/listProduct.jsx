import React from 'react';
import PropTypes from 'prop-types';
import { LinkProduct, Paginator } from 'components/molecules';
import './list-product.scss';

const ListProduct = function ({ products }) {

    return (

        <Paginator className={`list-product${products.length > 3 ? '' : '--three-column'}`} size={12}>
            {
                products.map((product) => (

                    <LinkProduct
                        key={product.id}
                        className="list-product__item"
                        title={product.title}
                        price={product.price}
                        discount={product.discount}
                        slug={product.slug}
                        images={product.images}
                    />

                ))
            }
        </Paginator>

    );

};

ListProduct.propTypes = {

    products: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.string,

            categoryId: PropTypes.string,

            caption: PropTypes.string,

            title: PropTypes.string,

            subtitle: PropTypes.string,

            tags: PropTypes.arrayOf(PropTypes.string),

            stock: PropTypes.number,

            sales: PropTypes.number,

            date: PropTypes.number,

            images: PropTypes.arrayOf(PropTypes.string),

            price: PropTypes.number,

            discount: PropTypes.number,

            slug: PropTypes.string,

            content: PropTypes.string,

            spec: PropTypes.arrayOf(PropTypes.shape({

                key: PropTypes.string,

                value: PropTypes.string

            }))

        })

    ).isRequired

};

export { ListProduct };
