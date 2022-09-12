import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms';
import { ButtonIconText } from 'components/molecules';
import './select-option.scss';

const SelectOption = React.memo(function ({ className, variant, label, keyValue, selected, onClick }) {

    if (variant === 'single') {

        return (

            <Button
                key={keyValue}
                className={`select-option--single ${selected ? 'selected' : ''} ${className}`}
                onClick={() => onClick(keyValue)}
                variant="plain"
            >

                {label}

            </Button>

        );

    }

    return (

        <ButtonIconText
            key={keyValue}
            className={`select-option--multi ${selected ? 'selected' : ''} ${className}`}
            leadingIconName={selected ? 'check-square' : 'square'}
            label={label}
            onClick={() => onClick(keyValue)}
        />

    );

});

SelectOption.propTypes = {
    className: PropTypes.string,
    keyValue: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['single', 'multi']),
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    onClick: PropTypes.func
};

SelectOption.defaultProps = {
    className: '',
    variant: 'single',
    selected: false,
    onClick: null
};

export { SelectOption };
