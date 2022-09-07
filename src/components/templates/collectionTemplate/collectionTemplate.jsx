import React from 'react';
import PropTypes from 'prop-types';

const CollectionTemplate = React.memo(function ({ category, products }) {

    return (
        <>
            <div className="collection__header">
                <h1 className="collection__title">{category.title}</h1>
                <p className="collection__description">{category.description}</p>
            </div>

            <ul>
                {
                    products.map((product) => (

                        <li key={product.id}>
                            {product.title}
                        </li>

                    ))
                }
            </ul>
        </>
    );

});

CollectionTemplate.propTypes = {

    category: PropTypes.shape({

        id: PropTypes.string,

        title: PropTypes.string,

        url: PropTypes.string,

        slug: PropTypes.string,

        description: PropTypes.string

    }).isRequired,

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

export { CollectionTemplate };
