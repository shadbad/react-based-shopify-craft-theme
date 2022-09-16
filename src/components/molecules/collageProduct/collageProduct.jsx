import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'components/molecules';
import { useBodyLocker } from 'hooks';
import './collage-product.scss';

const CollageProduct = React.memo(function ({ className, children }) {

    const images = children.slice(0, 6);

    const bodyLocker = useBodyLocker();

    const [isZoomViewVisible, setIsZoomViewVisible] = useState(false);

    const zoomViewRef = useRef();

    const handle = {
        zoomClick: ({ target }) => {

            const src = target.closest('.collage__item-wrapper').querySelector('img').getAttribute('src');
            zoomViewRef.current.querySelector('img').setAttribute('src', src);
            bodyLocker(true);
            setIsZoomViewVisible(() => true);

        },

        zoomCloseClick: () => {

            setIsZoomViewVisible(() => false);
            bodyLocker(false);

        }
    };

    return (

        <>

            <div className={`collage-product--${images.length}-piece ${className}`}>
                {
                    images.map((img) => (

                        <div key={img.key} className="collage__item-wrapper">

                            <ButtonIcon
                                className="collage__item-wrapper__zoom-button"
                                iconName="zoom-in"
                                variant="expandOnHover"
                                onClick={handle.zoomClick}
                            />

                            {img}

                        </div>

                    ))
                }
            </div>

            <div className={`collage-product__zoom-view ${isZoomViewVisible ? 'visible' : ''}`} ref={zoomViewRef}>

                <ButtonIcon className="collage-product__zoom-view__close-button" iconName="cross" variant="expandOnHover" onClick={handle.zoomCloseClick} />

                <div className="collage-product__zoom-view__wrapper">
                    <img src="" alt="" />
                </div>

            </div>

        </>
    );

});

CollageProduct.propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node).isRequired
};

CollageProduct.defaultProps = {
    className: ''
};

export { CollageProduct };
