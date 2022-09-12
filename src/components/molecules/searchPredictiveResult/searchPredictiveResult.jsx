import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LinkArrow } from 'components/molecules';
import { TextPrice } from 'components/atoms';
import './search-predictive-result.scss';

const SearchPredictiveResult = function ({ className, query, filteredProducts, onClick }) {

    return (

        <div className={`search-predictive-result ${className}`}>

            <span className="search-predictive-result-title">Products</span>

            <ul className="search-predictive-result__list">
                {
                    filteredProducts.map((item) => (

                        <li key={item.id} className="search-predictive-result__list-item">

                            <Link className="search-predictive-result__list-item-link" to={`/products/${item.slug}`} onClick={onClick}>

                                <img
                                    className="search-predictive-result__list-item-image"
                                    src={item.images[0]}
                                    alt={item.title}
                                />

                                <span className="search-predictive-result__list-item-title">{item.title}</span>

                                <TextPrice className="search-predictive-result__list-item-price" price={item.price} discount={item.discount} />

                            </Link>

                        </li>

                    ))
                }
            </ul>

            <LinkArrow className="search-predictive-result-search-for-link" href={`/search/${query}`} onClick={onClick}>
                {`Search for "${query}"`}
            </LinkArrow>

        </div>

    );

};

SearchPredictiveResult.propTypes = {

    className: PropTypes.string,
    query: PropTypes.string.isRequired,
    filteredProducts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        discount: PropTypes.number,
        url: PropTypes.string
    })).isRequired,
    onClick: PropTypes.func

};

SearchPredictiveResult.defaultProps = {

    className: '',
    onClick: null

};

export { SearchPredictiveResult };
