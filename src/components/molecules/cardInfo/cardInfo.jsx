import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/atoms';
import './card-info.scss';

const CardInfo = React.memo(function ({ className, title, description, image, iconName }) {

    return (

        <div className={`card-info ${className}`}>

            {(image !== '' && iconName === '') && <img width="0" height="0" className="card-info__image" src={image} alt={title} />}

            {(iconName !== '') && <Icon className="card-info__icon" name={iconName} />}

            <strong className="card-info__title">{title}</strong>

            <p className="card-info__description">{description}</p>

        </div>

    );

});

CardInfo.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    iconName: PropTypes.string
};

CardInfo.defaultProps = {
    className: '',
    image: '',
    iconName: ''
};

export { CardInfo };
