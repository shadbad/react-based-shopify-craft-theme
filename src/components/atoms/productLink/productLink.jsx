import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './product-link.module.scss';

const ProductLink = React.memo(function ({ title, image, price, discount, url }) {

    const priceFormatter = useCallback((p) => `${new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(p)} GBP`);

    return (
        <a className={styles.root} href={url}>
            <img src={image} alt={title} />

            <strong>{title}</strong>

            <span>

                {
                    discount !== 0 &&
                    (
                        <>
                            <s>{priceFormatter(price)}</s>
                            <span>{priceFormatter(price - price * discount)}</span>
                        </>
                    )
                }

                {
                    discount === 0 &&
                    <span>{priceFormatter(price)}</span>
                }
            </span>
        </a>
    );

});

ProductLink.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    url: PropTypes.string.isRequired
};

ProductLink.defaultProps = {
    discount: 0
};

export { ProductLink };
