import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/atoms';
import './button-icon-text.scss';

const ButtonIconText = React.memo(function ({ className, leadingIconName, trailingIconName, label, onClick, variant, disabled }) {

    return (

        <button disabled={disabled} className={`button-icon-text--${variant} ${className}`} onClick={onClick} type="button">

            {leadingIconName !== '' && <Icon className="button-icon-text__icon-leading" name={leadingIconName} />}

            <span className="button-icon-text__label">{label}</span>

            {trailingIconName !== '' && <Icon className="button-icon-text__icon-trailing" name={trailingIconName} />}

        </button>

    );

});

ButtonIconText.propTypes = {
    className: PropTypes.string,
    trailingIconName: PropTypes.string,
    leadingIconName: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['underlineOnHover', 'plain']),
    disabled: PropTypes.bool
};

ButtonIconText.defaultProps = {
    className: '',
    trailingIconName: '',
    leadingIconName: '',
    onClick: null,
    variant: 'plain',
    disabled: false
};

export { ButtonIconText };
