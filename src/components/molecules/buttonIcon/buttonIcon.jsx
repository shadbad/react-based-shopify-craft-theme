import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'components/atoms';

import './button-icon.scss';

const ButtonIcon = React.memo(function ({ className, iconName, variant, disabled, onClick }) {

    return (

        <Button className={`button-icon--${variant} ${disabled ? 'disable' : ''} ${className}`} onClick={onClick} variant="plain">

            <Icon className="button-icon__icon" name={iconName} />

        </Button>

    );

});

ButtonIcon.propTypes = {
    className: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['expandOnHover', 'basic']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

ButtonIcon.defaultProps = {
    className: '',
    variant: 'basic',
    onClick: null,
    disabled: false
};

export { ButtonIcon };
