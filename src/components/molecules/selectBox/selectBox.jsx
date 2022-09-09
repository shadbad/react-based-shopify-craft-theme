import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms';
import { ButtonIconText } from 'components/molecules';
import './select-box.scss';

const SelectBox = React.memo(function ({ className, options, onOptionClick }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handle = {

        buttonClick: useCallback(() => setIsExpanded(() => !isExpanded)),

        optionClick: useCallback((optionKey) => {

            const option = options.find((item) => item.key === optionKey);

            setSelectedOption(() => option);

            if (onOptionClick) onOptionClick(option.key);

        })

    };

    return (

        <div className={`select-box ${className}`}>

            <ButtonIconText
                className="select-box-multi__button"
                trailingIconName={isExpanded ? 'chevron-up' : 'chevron-down'}
                label={selectedOption.title}
                onClick={handle.buttonClick}
                variant="underlineOnHover"
            />

            <div className={`select-box__list ${isExpanded ? 'visible' : ''}`}>
                {
                    options.map((option) => (

                        <Button
                            key={option.key}
                            className={`select-box__list-item ${selectedOption.key === option.key ? 'selected' : ''}`}
                            onClick={() => handle.optionClick(option.key)}
                            variant="plain"
                        >

                            {option.title}

                        </Button>

                    ))
                }
            </div>

        </div>

    );

});

SelectBox.propTypes = {
    className: PropTypes.string,

    options: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        key: PropTypes.string
    })).isRequired,

    onOptionClick: PropTypes.func
};

SelectBox.defaultProps = {
    className: '',
    onOptionClick: null
};

export { SelectBox };
