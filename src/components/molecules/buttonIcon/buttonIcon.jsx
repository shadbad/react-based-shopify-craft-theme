import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'components/atoms';

import './button-icon.scss';

const ButtonIcon = React.memo(function ({ className, iconName, variant, onClick }) {

    return (

        <Button className={`button-icon--${variant} ${className}`} onClick={onClick} variant="plain">

            <Icon className="button-icon__icon" name={iconName} />

        </Button>

    );

});

ButtonIcon.propTypes = {
    className: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['expandOnHover', 'basic']),
    onClick: PropTypes.func
};

ButtonIcon.defaultProps = {
    className: '',
    variant: 'basic',
    onClick: null
};

export { ButtonIcon };
