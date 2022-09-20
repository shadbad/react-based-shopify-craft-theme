import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { TextHeading } from 'components/atoms';
import { ListProduct } from 'components/molecules';
import { SearchForm } from 'components/organisms';

import './search-template.scss';

const SearchTemplate = function ({ products }) {

    return (
        <>

            <TextHeading className="search-template__heading" type={1}>Search results</TextHeading>

            <div className="search-template__form-wrapper">
                <SearchForm className="search-template__form" key={nanoid()} />
            </div>

            <ListProduct key={nanoid()} className="search-template__list" products={products} />
        </>
    );

};

SearchTemplate.propTypes = {

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

export { SearchTemplate };
